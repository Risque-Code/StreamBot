import { BaseCommand } from "./base.js";
import { CommandContext } from "../types/index.js";

export default class PlayCommand extends BaseCommand {
	name = "play";
	description = "Play a local video from your videos folder";
	usage = "play <video_name>";

	async execute(context: CommandContext): Promise<void> {
		const input = context.args.join(' ');

		if (!input) {
			await this.sendError(context.message, 'Please provide a local video name.');
			return;
		}

		const video = context.videos.find(m => m.name === input);

		if (!video) {
			await this.sendError(context.message, 'Video not found. Use the list command to see available local videos.');
			return;
		}

		const success = await context.streamingService.addToQueue(context.message, video.path, video.name);
		if (success && !context.streamStatus.playing) {
			await context.streamingService.playFromQueue(context.message);
		}
	}
}
