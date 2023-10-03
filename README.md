
# Neon + Cloudflare Hyperdrive demo

Note that Hyperdrive appears to work for `wrangler deploy` but only the remote type of `wrangler dev`.

```bash
% npm create cloudflare@latest
# Need to install the following packages:
#   create-cloudflare@2.3.1
# Ok to proceed? (y) y

# using create-cloudflare version 2.3.1

# ╭ Create an application with Cloudflare Step 1 of 3
# │ 
# ├ In which directory do you want to create your application?
# │ dir ./neon-hyperdrive
# │
# ├ What type of application do you want to create?
# │ type "Hello World" Worker
# │
# ├ Do you want to use TypeScript?
# │ yes typescript
# │
# ├ Copying files from "hello-world" template
# │ 
# ├ Do you want to use TypeScript?
# │ yes typescript
# │
# ├ Retrieving current workerd compatibility date 
# │ compatibility date 2023-10-02
# │ 
# ├ Do you want to use git for version control?
# │ yes git
# │
# ╰ Application created 

# ╭ Installing dependencies Step 2 of 3
# │ 
# ├ Installing dependencies 
# │ installed via `npm install`
# │ 
# ├ Committing new files 
# │ git commit
# │ 
# ╰ Dependencies Installed 

# ╭ Deploy with Cloudflare Step 3 of 3
# │ 
# ├ Do you want to deploy your application?
# │ no deploy via `npm run deploy`
# │
# ├  APPLICATION CREATED  Deploy your application with npm run deploy
# │ 
# │ Navigate to the new directory cd neon-hyperdrive
# │ Run the development server npm run start
# │ Deploy your application npm run deploy
# │ Read the documentation https://developers.cloudflare.com/workers
# │ Stuck? Join us at https://discord.gg/cloudflaredev
# │ 
# ╰ See you again soon! 


cd neon-hyperdrive

npm install pg
npm install --save-dev @types/pg

# you'll need to redo this bit for your DB, then copy the new binding id into wrangler.toml

wrangler hyperdrive create neon-eu-central-1 --connection-string="postgres://user:password@ep-long-grass-595339.eu-central-1.aws.neon.tech:5432/main?sslmode=verify-full"

# 🚧 Creating 'neon-eu-central-1'
# ✅ Created new Hyperdrive config
#  {
#   "id": "e00ae1df7f614dd9858c1b3361011352",
#   "name": "neon-eu-central-1",
#   "origin": {
#     "host": "ep-long-grass-595339.eu-central-1.aws.neon.tech",
#     "port": 5432,
#     "database": "main",
#     "user": "user"
#   },
#   "caching": {
#     "disabled": false
#   }
# }

code src/index.ts
wrangler deploy
```
