// api/secret.js
export default async function handler(req, res) {
  const apis = {
    googleFormUrl: process.env.GOOGLE_FORM_URL,
    leetcodeApi: process.env.LEETCODE_API,
    githubApi: process.env.GITHUB_API,
  };
  const response = await fetch(apis);
  const data = await response.json();
  res.status(200).json(data);
}
