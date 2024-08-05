// api/secret.js
export default function handler(req, res) {
  try {
    const apis = {
      googleFormUrl: process.env.GOOGLE_FORM_URL,
      leetcodeApi: process.env.LEETCODE_API,
      githubApi: process.env.GITHUB_API,
    };

    // Respond with the API URLs
    res.status(200).json(apis);
  } catch (error) {
    console.error("Error in /api/secret:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
