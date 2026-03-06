# StreamBot

Discord self-bot for streaming videos from a **local folder only**.

## Features

- Play videos from your configured `VIDEOS_DIR`
- Queue multiple local files
- Skip, stop, status, and list commands
- Preview thumbnails for local files

## Usage

1. Install dependencies:
   - `bun install` or `npm install`
2. Configure `.env` values (token, ids, prefix, and folders).
3. Run:
   - `bun run start`
   - or `npm run build && npm run start:node`

## Commands

- `play <video_name>` - Play a local video by name
- `list` - Show local videos
- `queue` - Show queue
- `skip` - Skip current video
- `stop` - Stop playback and clear queue
- `status` - Show streaming status
- `preview <video_name>` - Generate local preview thumbnails
- `config [parameter] [value]` - Admin runtime config
- `help` - Show all commands

## Notes

- Remote sources are intentionally disabled.
- Web dashboard, HTML views, uploads, YouTube, and Twitch support were removed.
