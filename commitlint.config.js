module.exports = {
  ignores: [commit => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [1, "never"],
    "footer-leading-blank": [1, "never"],
    "header-max-length": [1, "never", 108],
    "subject-empty": [1, "never"],
    "type-empty": [1, "never"],
    "type-enum": [
      1,
      "never",
      [
        "feat",
        "fix",
        "perf",
        "style",
        "docs",
        "test",
        "refactor",
        "build",
        "ci",
        "chore",
        "revert",
        "wip",
        "workflow",
        "types",
        "release"
      ]
    ]
  }
};
