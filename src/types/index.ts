export interface CommandContext {
	message: any;
	args: string[];
	videos: Video[];
	streamStatus: StreamStatus;
	streamingService: any;
}

export interface StreamStatus {
	joined: boolean;
	joinsucc: boolean;
	playing: boolean;
	manualStop: boolean;
	channelInfo: {
		guildId: string;
		channelId: string;
		cmdChannelId: string;
	};
	queue: VideoQueue;
}

export interface Video {
	name: string;
	path: string;
}

export interface Command {
	name: string;
	description: string;
	usage: string;
	aliases?: string[];
	execute(context: CommandContext): Promise<void>;
}

export interface MediaSource {
	url: string;
	title: string;
	type: 'local';
	isLive?: boolean;
}

export interface QueueItem {
	id: string;
	url: string;
	title: string;
	type: MediaSource['type'];
	isLive?: boolean;
	requestedBy: string;
	addedAt: Date;
	originalInput?: string;
	resolved?: boolean;
}

export interface VideoQueue {
	items: QueueItem[];
	currentIndex: number;
	isPlaying: boolean;
}
