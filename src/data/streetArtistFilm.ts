import { IMAGES } from '../assets/images';

export interface StreetArtistScene {
  sceneNumber: number; // 1 to 12
  timeOfDay: string;
  title: string;
  shotType: string;
  focalLength: string;
  aperture: string;
  cameraMovement: string;
  actionNote: string; // Brief action notes as requested
  audioCue: string;
  imageStill: string;
  compositionTip: string;
  problemFaced: {
    issue: string;
    fieldFix: string;
  };
  durationSec: number;
}

export const STREET_ARTIST_SCENES: StreetArtistScene[] = [
  {
    sceneNumber: 1,
    timeOfDay: '05:30 AM',
    title: 'The Pre-Dawn Studio Ritual',
    shotType: 'Extreme Close-Up (ECU)',
    focalLength: '90mm Macro Cine',
    aperture: 'T2.8',
    cameraMovement: 'Static lockdown on workbench with micro-slider drift',
    actionNote: 'X-Acto knife slices thick cardboard stencil. Gloved hands load 8 rattling spray cans into a weathered canvas backpack.',
    audioCue: 'Metallic ball bearings rattling inside pressurized cans; sharp blade slicing paper fibers; distant clock ticking.',
    imageStill: IMAGES.shotMacroEyeReflection,
    compositionTip: 'Extreme shallow focus directs the audience to the rhythmic precision of stencil cutting before dawn.',
    problemFaced: {
      issue: 'Macro depth of field under 2mm causing blade tip to repeatedly blur out.',
      fieldFix: 'Stopped down to T5.6 and added a high-output mini LED wand taped 4 inches from the blade.'
    },
    durationSec: 3.5
  },
  {
    sceneNumber: 2,
    timeOfDay: '06:15 AM',
    title: 'Dawn Transit Through Empty Streets',
    shotType: 'Tracking Medium Shot (Low Rig)',
    focalLength: '35mm Prime',
    aperture: 'T2.0',
    cameraMovement: 'Tracking backward from a chase e-bike 4 feet off the asphalt',
    actionNote: 'Hooded artist pedals fixed-gear bike through blue morning fog. Backpack jingles rhythmically with each pedal rotation.',
    audioCue: 'Bicycle chain hum, tire tread hissing on damp asphalt, muffled dawn foghorn in the harbor.',
    imageStill: IMAGES.shotDutchAngleNoir,
    compositionTip: 'Low camera height captures wet pavement reflections beneath the rolling tires for forward kinetic energy.',
    problemFaced: {
      issue: 'Vibration from bike wheels shaking the gimbal rig on cobblestones.',
      fieldFix: 'Mounted an active wire-rope isolator cradle between the hitch and camera gimbal.'
    },
    durationSec: 4.0
  },
  {
    sceneNumber: 3,
    timeOfDay: '07:00 AM',
    title: 'Confronting the Blank Monolith',
    shotType: 'Extreme Wide Shot (EWS)',
    focalLength: '21mm Ultra-Wide',
    aperture: 'T8.0',
    cameraMovement: 'Slow crane pedestal rising from ground level to 12 feet',
    actionNote: 'Artist stands minuscule in an empty brick alley, looking up at an imposing 3-story unpainted brick warehouse wall.',
    audioCue: 'Gusting morning wind whistling through fire escape railings; lone crow caw.',
    imageStill: IMAGES.streetArtistWallDawn,
    compositionTip: 'Center the tiny silhouette against the massive vertical brick grid to convey David vs Goliath scale.',
    problemFaced: {
      issue: 'Early morning building shadows cut the brick wall in half with 6 stops of contrast.',
      fieldFix: 'Shot toward the shadow side and balanced exposure with a 12x12 silver bounce reflector.'
    },
    durationSec: 5.0
  },
  {
    sceneNumber: 4,
    timeOfDay: '07:45 AM',
    title: 'Shaking the Can & Cap Selection',
    shotType: 'Tight Close-Up (CU)',
    focalLength: '50mm Prime',
    aperture: 'T1.8',
    cameraMovement: 'Gentle handheld breathing on EasyRig',
    actionNote: 'Paint-crusted fingerless gloves pop off a standard cap and snap on a specialized teal fat cap. Quick test spray into the dirt.',
    audioCue: 'Crisp plastic cap snap; hiss of pressurized pigment vapor.',
    imageStill: IMAGES.streetArtistCloseupSpray,
    compositionTip: 'Backlight the spray test so airborne pigment droplets illuminate like floating gold dust.',
    problemFaced: {
      issue: 'Airborne aerosol drift settling directly onto the front anamorphic lens element.',
      fieldFix: 'Mounted an optical clear filter and aimed a small 12V battery blower fan across the lens hood.'
    },
    durationSec: 3.0
  },
  {
    sceneNumber: 5,
    timeOfDay: '08:30 AM',
    title: 'The First Bold Stroke',
    shotType: 'Low-Angle Hero Shot',
    focalLength: '24mm Wide Prime',
    aperture: 'T2.8',
    cameraMovement: 'Static ground-level hi-hat tilted 35° upward',
    actionNote: 'Artist sweeps a wide, confident arc of blazing cadmium orange across raw masonry. First line of the mural awakens.',
    audioCue: 'Continuous pressurized hiss echoing off alley walls; artist sharp exhale.',
    imageStill: IMAGES.streetArtistHeroLowAngle,
    compositionTip: 'Angle up from the artist’s boots to glorify the physical athleticism of large-scale wall painting.',
    problemFaced: {
      issue: 'Low morning sun behind the roofline created intense lens flare that washed out the orange paint.',
      fieldFix: 'Attached a hard top French flag and side flags to the matte box to shade the lens element.'
    },
    durationSec: 4.5
  },
  {
    sceneNumber: 6,
    timeOfDay: '10:15 AM',
    title: 'Precision Layering the Stencil',
    shotType: 'Dirty Over-the-Shoulder (OTS)',
    focalLength: '40mm Classic Prime',
    aperture: 'T2.0',
    cameraMovement: 'Slow creep-in on a 3-foot slider',
    actionNote: 'From behind the artist’s shoulder, we watch fingers press intricate cardboard stencils against brick while applying misty charcoal shading.',
    audioCue: 'Staccato bursts of aerosol; cardboard rustling in breeze.',
    imageStill: IMAGES.shotOtsInterrogation,
    compositionTip: 'Keep the artist’s shoulder in dark silhouette to create intimacy with the delicate craft.',
    problemFaced: {
      issue: 'Wind gusts kept blowing the stencil edges off the brick face, causing paint bleed.',
      fieldFix: 'Used removable low-tack repositionable spray adhesive and weighted magnet bars against metal wall ties.'
    },
    durationSec: 4.0
  },
  {
    sceneNumber: 7,
    timeOfDay: '01:00 PM',
    title: 'The Rush Hour Spectators',
    shotType: 'Canted Dutch Angle (15° Tilt)',
    focalLength: '35mm Prime',
    aperture: 'T2.8',
    cameraMovement: 'Lateral tracking past moving pedestrians',
    actionNote: 'Midday commuters in trench coats slow their stride; heads turn in curiosity and mild tension as the portrait takes shape.',
    audioCue: 'City crosswalk audio beeps, traffic rumble, murmuring voices: "Is that legal?"',
    imageStill: IMAGES.shotDutchAngleNoir,
    compositionTip: 'The 15° tilted horizon conveys the artist’s underlying anxiety about public exposure and authority.',
    problemFaced: {
      issue: 'Pedestrians walking directly between the camera dolly track and the artist.',
      fieldFix: 'Stationed two production assistants disguised as city surveyors with clipboards to guide foot traffic.'
    },
    durationSec: 3.8
  },
  {
    sceneNumber: 8,
    timeOfDay: '03:30 PM',
    title: 'The Sidewalk Palette & Cap Scatter',
    shotType: 'Top-Down 90° Overhead Bird’s Eye',
    focalLength: '28mm Prime',
    aperture: 'T4.0',
    cameraMovement: 'Perpendicular crane arm hovering 14 feet directly overhead',
    actionNote: 'Looking straight down at wet pavement: 20 colored cans arranged by gradient, paint-dripped cardboard, chalk sketches, and half-empty coffee cup.',
    audioCue: 'Distantly echoing street sounds; metal can rolling across asphalt.',
    imageStill: IMAGES.shotOverheadCrimeScene,
    compositionTip: 'Graphic perpendicular view transforms chaotic artist tools into an abstract geometric composition.',
    problemFaced: {
      issue: 'Crane shadow cast directly across the center of the spray can layout.',
      fieldFix: 'Swapped camera to an underslung jib offset with a 45° cross key light to throw the shadow out of frame.'
    },
    durationSec: 4.0
  },
  {
    sceneNumber: 9,
    timeOfDay: '05:15 PM',
    title: 'Flash of Blue & The Heartbeat Panic',
    shotType: 'High-Speed Whip Pan',
    focalLength: '32mm Prime',
    aperture: 'T2.8',
    cameraMovement: 'Violent 90° whip snap right from wall to alley mouth',
    actionNote: 'Distand siren wails. The artist’s hand freezes mid-stroke; camera whips to flashing red and blue patrol lights reflecting in rain puddles.',
    audioCue: 'Sudden high-pitched tinnitus ring; heavy breath intake; distant siren whoop.',
    imageStill: IMAGES.shotDollyZoomCorridor,
    compositionTip: 'Motion blur creates adrenaline and urgency, making the audience fear an immediate arrest.',
    problemFaced: {
      issue: 'Rolling shutter jello distortion bending vertical lamp poles during fast whip snap.',
      fieldFix: 'Switched sensor to global shutter mode and set shutter angle to 90° for crisp motion streaks.'
    },
    durationSec: 2.2
  },
  {
    sceneNumber: 10,
    timeOfDay: '06:30 PM',
    title: 'The Soul of the Mural: Painting the Iris',
    shotType: 'Macro Extreme Close-Up (ECU)',
    focalLength: '100mm Macro Cine',
    aperture: 'T2.8',
    cameraMovement: 'Slow micro push-in along optical axis',
    actionNote: 'With surgical focus, artist sprays a tiny white dot highlight into the giant painted portrait’s eye. The mural instantly comes alive.',
    audioCue: 'Single soft puff of paint; ambient city silence; acoustic cello chord swelling.',
    imageStill: IMAGES.shotMacroEyeReflection,
    compositionTip: 'Framing only the painted eye creates a sudden human emotional connection with cold concrete.',
    problemFaced: {
      issue: 'Fine aerosol mist clogging nozzle tip causing unpredictable splatter droplets on the eye.',
      fieldFix: 'Artist soaked nozzle caps in mineral spirits and used a fresh surgical needle before the hero stroke.'
    },
    durationSec: 3.5
  },
  {
    sceneNumber: 11,
    timeOfDay: '07:45 PM',
    title: 'Magic Hour Crowds & The Reveal',
    shotType: 'Wide Tracking Glide Shot',
    focalLength: '35mm Prime',
    aperture: 'T2.0',
    cameraMovement: 'Steadicam tracking along the alley sidewalk at walking speed',
    actionNote: 'Golden hour sunset glints off brick. A gathered crowd of neighbors, skaters, and workers stands mesmerized, snapping phone photos of the finished 20-foot masterpiece.',
    audioCue: 'Camera phone shutter clicks, quiet murmurs of awe, sunset city breeze.',
    imageStill: IMAGES.streetArtistMuralCrowd,
    compositionTip: 'Use natural sunset backlight rim on the crowd silhouettes to contrast against the illuminated mural colors.',
    problemFaced: {
      issue: 'Rapidly fading magic hour twilight gave only a 12-minute window for the entire crowd scene.',
      fieldFix: 'Ran dual-camera coverage (Camera A on Steadicam wide, Camera B on 85mm close-up reactions).'
    },
    durationSec: 5.0
  },
  {
    sceneNumber: 12,
    timeOfDay: '10:00 PM',
    title: 'Disappearing into Nocturnal Shadows',
    shotType: 'High-Angle Pull-Back Long Shot',
    focalLength: '50mm Anamorphic',
    aperture: 'T1.9',
    cameraMovement: 'Crane rising and pulling backward into the darkness',
    actionNote: 'The artist slumps the backpack over one shoulder and slips silently into the foggy night. The luminous mural stays behind, glowing under warm streetlights.',
    audioCue: 'Fading footsteps on wet cobblestones; melancholic nocturnal city ambiance; gentle vinyl record crackle.',
    imageStill: IMAGES.streetArtistWallDawn,
    compositionTip: 'Let the artist dissolve into black shadows while keeping the mural vibrant and centered.',
    problemFaced: {
      issue: 'Extreme low light at 10 PM caused high sensor noise in shadow areas.',
      fieldFix: 'Shot on dual-native ISO 3200 with prime lenses wide open at T1.9 and placed a subtle amber backlight on the roof.'
    },
    durationSec: 6.0
  }
];
