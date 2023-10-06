# neon_twitter

`neon_twitter` is a microblogging application designed to demonstrate the database branching capability of Neon Serverless Postgres with Neon's [GitHub Actions](https://neon.tech/docs/guides/branching-github-actions#create-branch-action).

Neon provides the following GitHub Actions for working with Neon branches, which can be integrated into your CI workflows:

- [Create branch action](https://github.com/neondatabase/create-branch-action)
- [Delete branch action](https://github.com/neondatabase/delete-branch-action)

This application leverages GitHub Actions to automate branch creation, schema validation with Prisma, and migration deployments. Each pull request to the main branch triggers the creation of a temporary branch to test Prisma migrations, ensuring schema changes are valid. When changes are pushed to the main branch, these migrations are applied to the database schema.

## Get Started

### 1. Clone the repository

```bash
git clone git@github.com:neondatabase/neon_twitter.git
cd neon_twitter
```

### 2. Start with a fresh history

Remove the original git history:

```bash
rm -rf .git
```

### 3. Initialize your new repository

```bash
git init
```

### 4. Push to your own GitHub repository

First, create a new repository on GitHub. Once created:

```bash
git remote add origin git@github.com:[your-username]/your_neon_twitter.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

Replace [your-username] with your GitHub username.

### 5. Set up your shadow database

Create a database named shadow in Neon. For instructions, see [Create a database](https://neon.tech/docs/manage/databases#create-a-database).

### 6. Configure your local environment

Create a `.env` file in the root of the project. Replace the placeholders ([user], [password], [neon_hostname], [dbname]) with your actual values:

```env
DATABASE_URL="postgres://[user]:[password]@[neon_hostname]/[dbname]"
DIRECT_URL="postgres://[user]:[password]@[neon_hostname]/[dbname]"
SHADOW_DATABASE_URL="postgres://[user]:[password]@[neon_hostname]/shadow"
```

### 7. Install dependencies and migrate

```bash
yarn install
yarn run prisma migrate dev
```

### 8. Start the Application

```bash
yarn dev
```

Open http://localhost:3000 to view the application.

### 9. GitHub secrets setup

Navigate to **Settings > Secrets and variables > Actions** in your GitHub repository. Add the following secrets to the repository:

- `NEON_PROJECT_ID`: Your Neon project ID. You can find this on the **Settings** tab in the Neon console.
- `NEON_API_KEY`: Your Neon API key. See [Create an API key](https://neon.tech/docs/manage/api-keys#create-an-api-key).
- `DATABASE_URL`: Your database URL in this format: `postgres://[user]:[password]@[neon_hostname]/[dbname]`.
- `NEON_USERNAME`: Your Neon username.

### 10. Make changes and create a PR

Make some changes to the Prisma schema or any part of the application that would typically trigger a database migration. Then:

```bash
git checkout -b feature/new-changes
git add .
git commit -m "Testing new changes"
git push origin feature/new-changes
```

Now, go to your GitHub repository and create a new Pull Request from the `feature/new-changes` branch to main. This should trigger the Test PR GitHub Action you've defined, and you can see the Neon branching in action.

### 11. Merge and check main deploy

After verifying the changes, you can merge the PR to the main branch, which would then trigger the Release GitHub Action to apply migrations to the main database.

### 12. Review GitHub Actions logs

You can navigate to the `Actions` tab in their GitHub repository to review the logs of the GitHub Actions. This will provide insight into what's happening during the branch creation, testing, and deployment processes.

### 13. Experiment further

Make more changes, create more PRs, and see how the GitHub Actions handle database branching with Neon.
