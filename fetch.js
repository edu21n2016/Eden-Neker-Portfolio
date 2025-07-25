const fs = require("fs");
const https = require("https");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName: "GitHub Username is undefined. Set all required env variables.",
  requestFailed: "GitHub API request failed. Check your GitHub token.",
  requestFailedMedium: "Medium API request failed. Check your Medium username."
};

if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_USERNAME) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching GitHub data for ${GITHUB_USERNAME}...`);
  const data = JSON.stringify({
    query: `
      {
        user(login: "${GITHUB_USERNAME}") {
          name
          bio
          isHireable
          avatarUrl
          location
          pinnedItems(first: 6, types: [REPOSITORY]) {
            edges {
              node {
                ... on Repository {
                  name
                  description
                  forkCount
                  stargazers {
                    totalCount
                  }
                  url
                  diskUsage
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    `
  });

  const options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node.js",
      "Content-Type": "application/json"
    }
  };

  const req = https.request(options, res => {
    let body = "";
    res.on("data", chunk => (body += chunk));
    res.on("end", () => {
      if (res.statusCode !== 200) {
        console.error(body);
        throw new Error(ERR.requestFailed);
      }
      fs.writeFile("./public/profile.json", body, err => {
        if (err) return console.error(err);
        console.log("✅ GitHub data saved to public/profile.json");
      });
    });
  });

  req.on("error", error => {
    throw error;
  });

  req.write(data);
  req.end();
}

if (MEDIUM_USERNAME && MEDIUM_USERNAME !== "YOU MEDIUM USERNAME HERE") {
  console.log(`Fetching Medium blog data for ${MEDIUM_USERNAME}...`);

  const rssUrl = encodeURIComponent(
    `https://medium.com/feed/@${MEDIUM_USERNAME}`
  );
  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=${rssUrl}`,
    port: 443,
    method: "GET"
  };

  const req = https.request(options, res => {
    let mediumData = "";
    res.on("data", chunk => (mediumData += chunk));
    res.on("end", () => {
      if (res.statusCode !== 200) {
        throw new Error(ERR.requestFailedMedium);
      }
      fs.writeFile("./public/blogs.json", mediumData, err => {
        if (err) return console.error(err);
        console.log("✅ Medium blog data saved to public/blogs.json");
      });
    });
  });

  req.on("error", error => {
    throw error;
  });

  req.end();
}
