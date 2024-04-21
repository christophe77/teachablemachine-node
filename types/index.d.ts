export = SashiDoTeachableMachine;
declare class SashiDoTeachableMachine {
	constructor(params: any);
	loadModel({ modelUrl }: { modelUrl: any }): Promise<any>;
	error: string;
	model: tf.LayersModel;
	checkModel(cb: any): Promise<{
		cb: any;
	}>;
	classify(params: any): Promise<any>;
	inference({ imageUrl }: { imageUrl: any }): Promise<
		{
			class: any;
			score: number;
		}[]
	>;
}
import tf = require('@tensorflow/tfjs');
