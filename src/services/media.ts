import { MediaSource } from '../types/index.js';
import { GeneralUtils } from '../utils/shared.js';
import path from 'path';

export class MediaService {
	public async resolveMediaSource(source: string): Promise<MediaSource | null> {
		if (!GeneralUtils.isLocalFile(source)) {
			return null;
		}

		return {
			url: source,
			title: path.basename(source, path.extname(source)),
			type: 'local'
		};
	}
}
