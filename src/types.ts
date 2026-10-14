export interface CameraSpecs {
  camera: string;
  lens: string;
  focalLength: string;
  aperture: string;
  iso: string;
  shutterAngle: string;
  stabilization: string;
  lightingSetup: string;
}

export interface StoryboardNote {
  shotNumber: string;
  sceneHeading: string;
  action: string;
  cameraMovement: string;
  audioPrompt: string;
  lensChoice: string;
  aspectRatio: string;
}

export interface ProductionProblem {
  title: string;
  category: 'Optics' | 'Weather' | 'Rigging' | 'Lighting' | 'Audio' | 'Sensors';
  issue: string;
  impactOnSet: string;
  fieldFix: string;
  proTip: string;
}

export interface Article {
  id: number;
  slug: string;
  pageNumber: number; // 1 to 10
  title: string;
  shotType: string;
  kicker: string;
  summary: string;
  imageStill: string;
  stillCaption: string;
  compositionInsight: string;
  storyboard: StoryboardNote;
  problemFaced: {
    issue: string;
    onSetCatastrophe: string;
    solution: string;
    ruleOfThumb: string;
  };
  cameraSpecs: CameraSpecs;
  directorLog: string[];
  keyTakeaway: string;
  category: 'Establishing' | 'Angles' | 'Movement' | 'Intimacy' | 'Atmosphere';
}

export interface StoryboardFrame {
  id: number;
  frameNumber: string;
  title: string;
  action: string;
  visualDescription: string;
  cameraAngle: string;
  cameraMove: string;
  audioCue: string;
  durationSec: number;
  shotType: string;
  focalLength: string;
  sketchStyle: 'high-contrast' | 'blueprint' | 'dramatic' | 'warm';
}
