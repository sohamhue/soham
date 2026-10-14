import { Article, StoryboardFrame, ProductionProblem } from '../types';
import { IMAGES } from '../assets/images';

export const ARTICLES: Article[] = [
  {
    id: 1,
    pageNumber: 1,
    slug: 'extreme-wide-shot-scale-and-isolation',
    shotType: 'Extreme Wide Shot (EWS)',
    kicker: '01. Establishing Geography & Scale',
    title: 'The Solitary Wasteland — Mastering the Extreme Wide Shot',
    summary: 'How to shrink a protagonist against an indifferent world using wide optics and horizon geometry.',
    imageStill: IMAGES.shotExtremeWideDesert,
    stillCaption: 'Figure pinned against black volcanic terrain under heavy overcast skies (Arri Alexa LF + 28mm Anamorphic).',
    compositionInsight: 'Positioning the subject on the lower-right third line beneath an imposing 70% sky mass exaggerates loneliness without dialogue.',
    storyboard: {
      shotNumber: 'SCENE 01 / SHOT 01',
      sceneHeading: 'EXT. VOLCANIC DESERT - DUSK',
      action: 'A lone wanderer in a travel cloak crests a basalt ridge, dwarfed by jagged mountain ridges.',
      cameraMovement: 'Static lockdown. Let wind and clouds provide internal frame movement.',
      audioPrompt: 'Low desolate wind whistle; dry volcanic gravel crunches under boots.',
      lensChoice: '28mm T2.3 Panavision Anamorphic',
      aspectRatio: '2.39:1 Cinemascope'
    },
    problemFaced: {
      issue: 'Extreme Heat Shimmer & Horizon Vibration',
      onSetCatastrophe: 'At 2:00 PM, radiating desert heat waves distorted infinity focus, blurring the distant volcanic ridge into muddy artifacts.',
      solution: 'Moved call time to dawn golden hour (6:15 AM); swapped from telephoto compression to a wide 28mm placed 18 feet from the subject on a low tripod.',
      ruleOfThumb: 'Shoot wide lenses close to ground level rather than long lenses through hundreds of yards of turbulent desert air.'
    },
    cameraSpecs: {
      camera: 'ARRI Alexa LF (Large Format)',
      lens: 'Panavision Primo Anamorphic 28mm',
      focalLength: '28mm',
      aperture: 'T8.0 (Maximum Depth of Field)',
      iso: '800 (Native Clean Sensor Base)',
      shutterAngle: '180° (1/48s at 24fps)',
      stabilization: 'OConnor 2575D Fluid Head on Ronford Baker Tripod',
      lightingSetup: 'Natural overcast bounce; 12x12 Solid Neg fill camera left'
    },
    directorLog: [
      'Scale is psychological: the smaller the actor in frame, the higher the survival stakes.',
      'Lock the camera off completely; panning ruins the feeling of spatial permanence.',
      'Never center the wanderer unless you want the audience to feel divine symmetry.'
    ],
    keyTakeaway: 'In an extreme wide shot, the landscape is your primary dialogue partner.',
    category: 'Establishing'
  },
  {
    id: 2,
    pageNumber: 2,
    slug: 'dutch-angle-noir-paranoia',
    shotType: 'Dutch Angle / Canted Tilt',
    kicker: '02. Psychological Tension & Distortion',
    title: 'The 15° Disorientation — Subverting Reality with the Dutch Angle',
    summary: 'Tilting the horizon axis to telegraph impending danger, delirium, and psychological dread.',
    imageStill: IMAGES.shotDutchAngleNoir,
    stillCaption: 'Wet cyberpunk back-alley with 14-degree canted horizon reflecting cyan and amber neon signs.',
    compositionInsight: 'The skewed vertical lines of street signs and rain pipes force the viewer’s neck muscles to tense instinctively.',
    storyboard: {
      shotNumber: 'SCENE 07 / SHOT 04',
      sceneHeading: 'EXT. CYBERPUNK ALLEY - NIGHT / RAIN',
      action: 'The hooded courier walks directly toward camera as rain slicks down; shadows tail behind.',
      cameraMovement: 'Canted slow track backward on Fisher 10 dolly.',
      audioPrompt: 'Heavy rain drumming on corrugated tin, buzzing neon transformers, distant police siren.',
      lensChoice: '35mm Cook S4/i Prime at T2.0',
      aspectRatio: '2.39:1 Cinemascope'
    },
    problemFaced: {
      issue: 'Gimbal Motor Error & Unwanted Auto-Leveling',
      onSetCatastrophe: 'The 3-axis electronic gimbal kept fighting the camera operator, automatically self-correcting the intentional 15° tilt back to horizontal.',
      solution: 'Killed gimbal pan-and-tilt roll motors; locked mechanical Dutch head bracket directly to the dolly pedestal with hard stops.',
      ruleOfThumb: 'Never use software or motorized gimbals for precise canted angles; use a mechanical Dutch tilt plate.'
    },
    cameraSpecs: {
      camera: 'RED V-Raptor 8K VV',
      lens: 'Cooke S4/i 35mm Prime',
      focalLength: '35mm',
      aperture: 'T2.0 (Creamy Wet Bokeh)',
      iso: '1600 (Dual Native High Gain)',
      shutterAngle: '172.8° (Eliminate 50Hz LED Neon Banding)',
      stabilization: 'Cartoni Dutch Head on Fisher 10 Dolly',
      lightingSetup: 'Practical neon tubes + Astera Titan Tubes tucked under eaves'
    },
    directorLog: [
      'Reserve the Dutch tilt for moments when the protagonist has lost narrative control.',
      'Do not exceed 18 degrees; anything beyond looks like an accidental tripod kick.',
      'Wet the asphalt: wet surfaces double ambient light values without adding lamp heads.'
    ],
    keyTakeaway: 'A canted frame destabilizes the viewer’s inner ear before their rational brain catches up.',
    category: 'Angles'
  },
  {
    id: 3,
    pageNumber: 3,
    slug: 'low-angle-hero-power-dynamics',
    shotType: 'Low-Angle Hero Shot',
    kicker: '03. Hierarchy & Authority in Frame',
    title: 'The Low-Angle Monolith — Granting Uncontested Dominance',
    summary: 'Placing the optical center below chest level to project unshakeable authority and physical menace.',
    imageStill: IMAGES.shotLowAngleHero,
    stillCaption: 'Officer towering over brutalist rooftop parapet against dusk cloud layers, golden rim backlight.',
    compositionInsight: 'The camera looking upward causes the subject’s shoulders to clip the horizon, creating a fortress silhouette.',
    storyboard: {
      shotNumber: 'SCENE 12 / SHOT 02',
      sceneHeading: 'EXT. ROOFTOP COMMUNICATIONS TOWER - TWILIGHT',
      action: 'Commander Vance turns toward camera, gripping holster; rain drips off the lapel of his leather trench coat.',
      cameraMovement: 'Subtle vertical jib pedestal rising 8 inches up from ground level.',
      audioPrompt: 'Muffled low-frequency city hum, wind gusting across concrete, thunder rumble.',
      lensChoice: '24mm Zeiss Master Prime',
      aspectRatio: '2.39:1 Cinemascope'
    },
    problemFaced: {
      issue: 'Blown-Out Twilight Sky vs Underexposed Subject Face',
      onSetCatastrophe: 'The dusk sky behind the hero was 5 stops brighter than his shadowed face under the coat collar, plunging his eyes into pure black mud.',
      solution: 'Rigged an ultra-soft Aputure 600d with a lantern diffuser on a menace arm directly over camera, dimmed to 12% to inject catchlights into the pupils.',
      ruleOfThumb: 'A hero shot without a catchlight in both pupils reads as a corpse or a soulless villain.'
    },
    cameraSpecs: {
      camera: 'Sony FX9 Full Frame 6K',
      lens: 'Zeiss Master Prime 24mm',
      focalLength: '24mm',
      aperture: 'T2.8',
      iso: '800 Base',
      shutterAngle: '180°',
      stabilization: 'Hi-Hat mount clamped directly to rooftop decking',
      lightingSetup: 'Warm sunset backlight + Aputure 600d lantern key light'
    },
    directorLog: [
      'Low angles magnify jawlines and suppress nervous blinking.',
      'Keep the lens at kneecap height for villains; sternum height for sympathetic protectors.',
      'Ensure the background architectural lines converge behind the head like a halo.'
    ],
    keyTakeaway: 'Power is not spoken in the script; power is awarded by the height of the lens axis.',
    category: 'Angles'
  },
  {
    id: 4,
    pageNumber: 4,
    slug: 'dolly-zoom-vertigo-perspective-warp',
    shotType: 'The Dolly Zoom / Vertigo Effect',
    kicker: '04. Optical Illusion & Sensory Shock',
    title: 'The Spatial Rift — Executing the Hitchcockian Dolly Zoom',
    summary: 'Counter-balancing camera forward travel with an exact optical zoom-out to stretch background perspective.',
    imageStill: IMAGES.shotDollyZoomCorridor,
    stillCaption: 'Sterile hospital hallway corridors warping backwards while patient stays static in frame center.',
    compositionInsight: 'Foreground subject size stays 100% constant while the hallway walls visually recede at alarming velocity.',
    storyboard: {
      shotNumber: 'SCENE 19 / SHOT 08',
      sceneHeading: 'INT. SUB-BASEMENT ASYLUM CORRIDOR - DAY',
      action: 'Dr. Hayes receives the lab diagnosis; the endless hallway behind him stretches into an infinite abyss.',
      cameraMovement: 'Dolly forward on precision track at 1.2 m/s while zoom motor pulls from 85mm to 24mm.',
      audioPrompt: 'Sudden high-pitched tinnitus tone; hallway fluorescent hum fades into heavy heartbeat.',
      lensChoice: 'Angenieux Optimo 24-290mm Cine Zoom',
      aspectRatio: '2.39:1 Cinemascope'
    },
    problemFaced: {
      issue: 'Tracking Speed and Zoom Servo Motor Desynchronization',
      onSetCatastrophe: 'Manual zoom pulls caused the subject’s head to violently grow and shrink across takes 1 through 6, ruining the vertigo illusion.',
      solution: 'Linked the Preston Cinema wireless micro-force zoom control to an optical encoder wheel on the dolly track rail for frame-accurate 1:1 speed matching.',
      ruleOfThumb: 'The Dolly Zoom fails if the actor’s eye-to-eye pixel distance changes by more than 3% during the move.'
    },
    cameraSpecs: {
      camera: 'ARRI Alexa Mini LF',
      lens: 'Angenieux Optimo Ultra 12x (24-290mm)',
      focalLength: '85mm transitioning down to 24mm',
      aperture: 'T4.0 (for depth tolerance)',
      iso: '1280',
      shutterAngle: '180°',
      stabilization: 'Chapman Leonard Hybrid IV Dolly on precision steel track',
      lightingSetup: 'Overhead Kino-Flo fluorescent tubes wired to DMX dimmer'
    },
    directorLog: [
      'The dolly zoom is cinematic pepper: use it once per feature film; twice is comedy.',
      'Have the actor remain completely still for 3 seconds before and after the track.',
      'Symmetric ceiling architecture multiplies the vertigo effect exponentially.'
    ],
    keyTakeaway: 'When the world expands while you remain pinned in place, terror needs no explanation.',
    category: 'Movement'
  },
  {
    id: 5,
    pageNumber: 5,
    slug: 'over-the-shoulder-tension-framing',
    shotType: 'Dirty Over-the-Shoulder (OTS)',
    kicker: '05. Eye-Line Calibrations & Closeness',
    title: 'The Dirty Frame — Staging Intimacy and Danger Over the Shoulder',
    summary: 'Using foreground human obstruction to create spatial geography, tension, and eavesdropping intimacy.',
    imageStill: IMAGES.shotOtsInterrogation,
    stillCaption: 'Gritty detective interrogation room with dirty wool overcoat shoulder framing suspect in smoky light.',
    compositionInsight: 'The dark foreground silhouette covers 28% of the left frame, creating a claustrophobic sightline barrier.',
    storyboard: {
      shotNumber: 'SCENE 04 / SHOT 03',
      sceneHeading: 'INT. PRECINCT 09 INTERROGATION ROOM - NIGHT',
      action: 'Detective Miller leans forward; suspect smiles nervously while tapping his pen on the case file.',
      cameraMovement: 'Subtle handheld micro-breathing to maintain human pulse.',
      audioPrompt: 'Cigarette smoke sizzle, grandfather clock tick, dripping radiator valve.',
      lensChoice: '50mm Cooke Anamorphic /i Prime',
      aspectRatio: '2.39:1 Cinemascope'
    },
    problemFaced: {
      issue: 'Foreground Actor Shifting & Severing the Key Eye-Light Catchlight',
      onSetCatastrophe: 'Every time the foreground actor exhaled or rocked, his heavy wool shoulder clipped the brass desk lamp beam, plunging the suspect into darkness.',
      solution: 'Placed a C-stand apple box behind the foreground actor to rest his elbow; flagged off the desk lamp and added an isolated Dedolight on a gobo arm.',
      ruleOfThumb: 'A "dirty" shoulder should anchor 20% to 30% of the frame without ever crossing into the subject’s far-side eye line.'
    },
    cameraSpecs: {
      camera: 'RED Monstro 8K VV',
      lens: 'Cooke Anamorphic /i 50mm Prime',
      focalLength: '50mm (Natural human eye perspective)',
      aperture: 'T2.3',
      iso: '800',
      shutterAngle: '180°',
      stabilization: 'EasyRig Vario 5 with Flowcine Serene arm',
      lightingSetup: 'Practical 40W tungsten desk lamp + Dedolight eye catchlight'
    },
    directorLog: [
      'Clean OTS shots feel sterile like soap operas; "dirty" OTS shots feel like documentary reality.',
      'Maintain the 180-degree axis line religiously or the audience will lose track of who is talking.',
      'Keep the foreground shoulder slightly out of focus to draw the iris straight to the subject’s pupils.'
    ],
    keyTakeaway: 'The shoulder in the foreground is not an accident; it is the anchor of narrative perspective.',
    category: 'Intimacy'
  },
  {
    id: 6,
    pageNumber: 6,
    slug: 'extreme-macro-close-up-emotion',
    shotType: 'Extreme Close-Up (ECU) / Macro',
    kicker: '06. Biological Scale & Vulnerability',
    title: 'The Micro Landscape — Dissecting Soul in the Extreme Close-Up',
    summary: 'Focusing on single millimeter facial gestures: the involuntary pupil dilation, tremor, and iris reflection.',
    imageStill: IMAGES.shotMacroEyeReflection,
    stillCaption: 'Amber iris in razor-thin depth of field reflecting the burning city horizon across cornea curvature.',
    compositionInsight: 'Magnification eliminates all environmental comfort, leaving the viewer trapped with the subject’s raw honesty.',
    storyboard: {
      shotNumber: 'SCENE 31 / SHOT 11',
      sceneHeading: 'EXT. RIDGE OVERLOOKING THE INFERNO - DAWN',
      action: 'Zara looks up as the fortress burns; the horizon fire reflects across her dilated pupil.',
      cameraMovement: 'Absolute lockoff with micrometer geared focus tracker.',
      audioPrompt: 'Heavy, shaky intake of breath; distant explosion rumble sub-bass.',
      lensChoice: 'Leica 90mm Macro-Elmarit-R at 1:1 reproduction',
      aspectRatio: '2.39:1 Cinemascope'
    },
    problemFaced: {
      issue: 'Depth of Field Breathing & Involuntary Eye Flutter',
      onSetCatastrophe: 'At 1:1 macro magnification and T2.8, the depth of field was just 1.5mm. Natural actor breathing caused eyelashes to pop repeatedly out of sharp focus.',
      solution: 'Stopped lens down to T5.6; boosted key light with an ultra-diffused Litepanels Gemini; introduced a chin-rest peg disguised beneath the costume collar.',
      ruleOfThumb: 'In macro cinematography, light output must increase by 2 to 3 stops to compensate for bellows lens extension factor.'
    },
    cameraSpecs: {
      camera: 'ARRI Alexa Mini LF',
      lens: 'Leica APO-Macro-Elmarit-TL 60mm T2.8',
      focalLength: '60mm Macro',
      aperture: 'T5.6',
      iso: '1600 (Clean pushed sensor)',
      shutterAngle: '180°',
      stabilization: 'OConnor 1030D Heavy Duty Studio Tripod',
      lightingSetup: 'Briese Focus 77 umbrella with warm amber 1/2 CTO gel'
    },
    directorLog: [
      'Actors cannot fake pupil dilation; use macro shots for irreversible emotional revelations.',
      'Have the actor blink on "3... 2... 1..." and hold eyes wide during the 4-second take.',
      'Catchlights in macro must be clean geometric shapes, never messy light spill.'
    ],
    keyTakeaway: 'The eye is a convex cinema screen reflecting the world the character is forced to witness.',
    category: 'Intimacy'
  },
  {
    id: 7,
    pageNumber: 7,
    slug: 'birds-eye-god-overhead-shot',
    shotType: 'Top-Down 90° Bird’s Eye View',
    kicker: '07. Determinism & Graphic Geometry',
    title: 'The Omniscient Grid — 90-Degree Top-Down Overhead Geometry',
    summary: 'Removing the horizon line entirely to turn city streets and human movements into a fatalistic chess board.',
    imageStill: IMAGES.shotOverheadCrimeScene,
    stillCaption: 'Rain-slicked intersection at midnight with black umbrella silhouettes, yellow taxi cab, and street striping.',
    compositionInsight: 'Strict perpendicular orientation flattens 3D depth into architectural graphic design.',
    storyboard: {
      shotNumber: 'SCENE 15 / SHOT 01',
      sceneHeading: 'EXT. CITY INTERSECTION - MIDNIGHT / RAIN',
      action: 'Nine pedestrians with black umbrellas cross the zebra stripes in counter-rhythm as traffic freezes.',
      cameraMovement: '90° vertical crane boom descending smoothly from 45 feet down to 22 feet.',
      audioPrompt: 'Steady rain on umbrella fabric, crosswalk audio beeps, engine idling exhaust rumble.',
      lensChoice: '21mm Zeiss Supreme Prime',
      aspectRatio: '2.39:1 Cinemascope'
    },
    problemFaced: {
      issue: 'Crane Shadow Casting Across the Center Wet Asphalt',
      onSetCatastrophe: 'A high-powered municipal mercury vapor streetlamp behind the crane boom projected a 30-foot metallic arm shadow directly across the crosswalk.',
      solution: 'Coordinated with city works to kill the streetlamp circuit; mounted two 1.2kW HMI Pars on Condor bucket cranes positioned 80 feet back at 45° cross-angles.',
      ruleOfThumb: 'In top-down shots, any light source placed directly behind the camera will ruin the shot with its own silhouette.'
    },
    cameraSpecs: {
      camera: 'RED V-Raptor XL 8K',
      lens: 'Zeiss Supreme Prime 21mm T1.5',
      focalLength: '21mm',
      aperture: 'T4.0',
      iso: '800',
      shutterAngle: '180°',
      stabilization: 'Technocrane 30 with Flight Head V 3-axis gyro head',
      lightingSetup: 'Dual Condor crane 1.2kW HMIs with 1/4 Minus Green gels'
    },
    directorLog: [
      'Overhead shots strip away emotional empathy and replace it with cosmic inevitability.',
      'Treat human bodies as graphical vector points; choreography must be mathematically timed.',
      'Wet the entire crosswalk pavement; dry patches look like unpainted canvas mistakes.'
    ],
    keyTakeaway: 'From directly above, human panic looks like organized ants.',
    category: 'Establishing'
  },
  {
    id: 8,
    pageNumber: 8,
    slug: 'the-cinematographer-rig-and-dolly-track',
    shotType: 'Behind the Lens: Camera Rigging',
    kicker: '08. Physical Machinery & On-Set Operations',
    title: 'Anatomy of the Heavy Rig — The DP & Focus Puller Synergy',
    summary: 'The mechanical ecosystem behind smooth cinematic motion: matte boxes, follow focus wireless arrays, and dolly mechanics.',
    imageStill: IMAGES.shotCinematographerCamera,
    stillCaption: 'Director of photography and 1st AC tracking period drama actors along a 30-foot steel dolly run with haze.',
    compositionInsight: 'The camera operator frames with her eye in the EVF while the 1st AC pulls focus on a remote monitor without looking at the set.',
    storyboard: {
      shotNumber: 'PRODUCTION LOG / SHOT TECH',
      sceneHeading: 'INT. STAGE B - PERIOD BALLROOM SEQUENCE',
      action: 'Camera tracks backward along ballroom table as two lovers exchange glance across champagne glasses.',
      cameraMovement: 'Continuous curved dolly track glide at 0.8 m/s with 4-stop neutral density filter swap.',
      audioPrompt: 'Silent on set: "Sound speed... Camera rolling... Slate 42 Take 3... ACTION!"',
      lensChoice: 'Cooke Speed Panchro 40mm Classic',
      aspectRatio: '2.39:1 Cinemascope'
    },
    problemFaced: {
      issue: 'Floor Squeaks & Track Leveling on Uneven Historical Parquet Floor',
      onSetCatastrophe: 'The 400-pound dolly caused vintage wood floorboards to creak audibly every time the wheels passed over floor joints, contaminating audio dialogue.',
      solution: 'Key Grip laid 3/4-inch marine plywood under the entire track run, topped with heavy rubber neatsfoot sound blankets and wood shims.',
      ruleOfThumb: 'A heavy dolly is only as silent as the subfloor underneath the track.'
    },
    cameraSpecs: {
      camera: 'ARRI Alexa 35',
      lens: 'Cooke Speed Panchro 40mm T2.3',
      focalLength: '40mm',
      aperture: 'T2.8',
      iso: '800 EI',
      shutterAngle: '180°',
      stabilization: 'Chapman Peewee Dolly on curved precision tracks',
      lightingSetup: 'Practical chandeliers on flicker dimmers + 4kW HMI bounced into muslin overhead'
    },
    directorLog: [
      'The bond between Camera Operator and 1st AC is like a pilot and co-pilot: zero chatter, pure rhythm.',
      'Always do a dummy rehearsal run without turning camera on to verify cable slack.',
      'Atmospheric haze makes light beams visible; without haze, studio lighting looks synthetic.'
    ],
    keyTakeaway: 'Every graceful camera movement is supported by four crew members breaking their backs in silence.',
    category: 'Movement'
  },
  {
    id: 9,
    pageNumber: 9,
    slug: 'whip-pan-kinetic-transition',
    shotType: 'The Whip Pan / Swish Pan',
    kicker: '09. Kinetic Speed & In-Camera Transitions',
    title: 'The Blurred Pivot — Designing Seamless In-Camera Whip Cuts',
    summary: 'Snapping the camera 90 degrees at lightning speed to mask scene transitions without CGI fades.',
    imageStill: IMAGES.shotDutchAngleNoir,
    stillCaption: 'Fast panning motion blur transforming architectural lines into kinetic streaks of neon color.',
    compositionInsight: 'Centrifugal blur masks the hard edit point between two completely different locations filmed days apart.',
    storyboard: {
      shotNumber: 'SCENE 22 / SHOT 05 TO 06',
      sceneHeading: 'INT. UNDERGROUND SAFE-HOUSE TO EXT. HIGHWAY GETAWAY',
      action: 'Alarm sirens scream; protagonist grabs bag and whips camera right. Cut hidden in motion blur to car speeding away.',
      cameraMovement: 'Violent 90° snap right on fluid head; operator decelerates smoothly on the secondary scene.',
      audioPrompt: 'Metallic whoosh transition SFX synced to tire screech and sirens.',
      lensChoice: '32mm Zeiss Ultra Prime',
      aspectRatio: '2.39:1 Cinemascope'
    },
    problemFaced: {
      issue: 'Rolling Shutter Jello Skew & Exposure Drop Mid-Whip',
      onSetCatastrophe: 'At standard 180° shutter angle, fast whipping caused vertical door frames to bend like rubber (jello effect) and the exposure dropped due to sudden dark background.',
      solution: 'Used global shutter mode on camera sensor; locked exposure manually to match both scene luminance profiles prior to executing the swing.',
      ruleOfThumb: 'Start the whip on actor movement and end the whip on a matching object landing into frame.'
    },
    cameraSpecs: {
      camera: 'Sony FX6 with electronic global shutter emulation',
      lens: 'Zeiss Ultra Prime 32mm T1.9',
      focalLength: '32mm',
      aperture: 'T2.8',
      iso: '800 Base',
      shutterAngle: '90° (Sharper streaked motion blur lines)',
      stabilization: 'Sachtler Video 20 Fluid Head with drag set to 1',
      lightingSetup: 'Pulsing emergency red strobe + overhead cool daylight'
    },
    directorLog: [
      'Whip pans inject adrenaline into mundane scene changes; use them to bridge emotional leaps.',
      'Always shoot three variations: slow whip, medium snap, and hyper-velocity flick.',
      'The audio design must carry 70% of the transition impact.'
    ],
    keyTakeaway: 'When the camera moves faster than the human eye can track, the editor can teleport the universe.',
    category: 'Movement'
  },
  {
    id: 10,
    pageNumber: 10,
    slug: 'the-deep-focus-split-diopter',
    shotType: 'Deep Focus & Split-Field Diopter',
    kicker: '10. Multiple Planes of Dramatic Truth',
    title: 'The Dual Horizon — Deep Focus Framing and Split-Field Optics',
    summary: 'Holding an extreme close-up in the immediate foreground and an action block 50 feet away in simultaneous razor focus.',
    imageStill: IMAGES.shotOtsInterrogation,
    stillCaption: 'Two simultaneous sharp planes: conspirator whisper in foreground and guard approaching in deep background.',
    compositionInsight: 'Forcing the viewer to read two simultaneous stories in a single uncut frame denies them the comfort of editing.',
    storyboard: {
      shotNumber: 'SCENE 28 / SHOT 02',
      sceneHeading: 'INT. PRISON VISITATION HALL - DAY',
      action: 'Foreground: Prisoner’s hand clenches contraband key. Deep background: Guard turns the corner with drawn baton.',
      cameraMovement: 'Static tripod framing; strict composition lock.',
      audioPrompt: 'Heavy metal door slam in echo chamber; quiet key jingle in foreground.',
      lensChoice: '40mm Master Prime + +1/2 Split Field Diopter glass',
      aspectRatio: '2.39:1 Cinemascope'
    },
    problemFaced: {
      issue: 'Visible Fuzzy Glass Seam Line Across the Frame',
      onSetCatastrophe: 'The split diopter glass edge produced a noticeable blurry vertical blur line cutting right through a wooden door frame in the mid-ground.',
      solution: 'Re-aligned the split-diopter glass boundary with a natural vertical architectural pillar and darkened that column with a subtle shadow flag.',
      ruleOfThumb: 'Always hide the split diopter seam behind a natural vertical line: a doorway, column, tree trunk, or shadow.'
    },
    cameraSpecs: {
      camera: 'ARRI Alexa Mini LF',
      lens: 'ARRI Signature Prime 40mm with Schneider 1/2 Split Diopter',
      focalLength: '40mm',
      aperture: 'T4.0',
      iso: '800',
      shutterAngle: '180°',
      stabilization: 'Mitchell-base Ronford Baker Heavy Tripod',
      lightingSetup: 'Dual-zone lighting: 1kW tungsten front key + high-output HMI background backlight'
    },
    directorLog: [
      'Split diopters are cinema magic invented before CGI; the raw tactile depth is impossible to replicate with software.',
      'Both actors must hit marks with millimeter precision; an inch of sway breaks the focal plane.',
      'Never zoom or pan with a split diopter mounted; the illusion will shatter instantly.'
    ],
    keyTakeaway: 'Deep focus turns the viewer into an investigator searching the screen for betrayal.',
    category: 'Atmosphere'
  }
];

export const STORYBOARD_SEQUENCE: StoryboardFrame[] = [
  {
    id: 1,
    frameNumber: 'FRAME 01 / 06',
    title: 'Establishing The Perimeter',
    shotType: 'Extreme Wide Shot (EWS)',
    focalLength: '24mm Anamorphic',
    durationSec: 4.5,
    cameraAngle: 'Level ground-level perspective',
    cameraMove: 'Static lock-off; desert wind buffets cloak',
    action: 'Courier pauses on the ridge overlooking the neon canyon below. Rain begins to fall in heavy drops.',
    audioCue: 'Distant thunder roll; wind howl; synthetic sub-bass tone.',
    visualDescription: 'Tiny human silhouette positioned at lower-third crossing against monumental mountain silhouette.',
    sketchStyle: 'high-contrast'
  },
  {
    id: 2,
    frameNumber: 'FRAME 02 / 06',
    title: 'The Tilted Descent',
    shotType: 'Dutch Angle Full Shot',
    focalLength: '35mm Prime',
    durationSec: 3.2,
    cameraAngle: '14° Canted Dutch Tilt to right',
    cameraMove: 'Low tracking push backward as courier descends stairs',
    action: 'Courier steps into the neon alley. Neon reflection shivers in rainwater puddles.',
    audioCue: 'Splashing wet combat boots; buzzing neon sign ballast.',
    visualDescription: 'Asymmetric diagonal architecture slicing frame; deep shadows framing footsteps.',
    sketchStyle: 'dramatic'
  },
  {
    id: 3,
    frameNumber: 'FRAME 03 / 06',
    title: 'Sudden Encounter Standoff',
    shotType: 'Low-Angle Two Shot',
    focalLength: '28mm Master Prime',
    durationSec: 5.0,
    cameraAngle: 'Low angle tilted up from knee height',
    cameraMove: 'Slow creep-in on Fisher Dolly',
    action: 'Agent intercepts courier under doorway light. Both silhouettes freeze in confrontational geometry.',
    audioCue: 'Rain drops sizzle against halogen lamp; cloth rustle; gun holster snap.',
    visualDescription: 'Two figures looming large against the cloudy twilight ceiling.',
    sketchStyle: 'blueprint'
  },
  {
    id: 4,
    frameNumber: 'FRAME 04 / 06',
    title: 'The Dirty Shoulder Exchange',
    shotType: 'Over-The-Shoulder Medium Close-Up',
    focalLength: '50mm Anamorphic',
    durationSec: 4.0,
    cameraAngle: 'Eye-level matching seated eyeline',
    cameraMove: 'Subtle handheld breath with flowcine arm',
    action: 'Agent: "You were never supposed to bring this back alive." Courier does not blink.',
    audioCue: 'Soft whisper dialogue close-mic’d; dripping drainpipe.',
    visualDescription: 'Dark shoulder occupying 30% of left frame; agent’s eyes catchlighted by streetlamp.',
    sketchStyle: 'warm'
  },
  {
    id: 5,
    frameNumber: 'FRAME 05 / 06',
    title: 'The Macro Realization',
    shotType: 'Extreme Close-Up (ECU)',
    focalLength: '90mm Macro Cine',
    durationSec: 2.8,
    cameraAngle: 'Direct eye level',
    cameraMove: 'Absolute tripod lockdown',
    action: 'Courier’s pupil expands as he notices the sniper reflection in the agent’s sunglasses.',
    audioCue: 'Muffled sudden heartbeat; high frequency ring tone.',
    visualDescription: 'Curved iris filling the frame with razor sharpness on eyelashes and cornea reflection.',
    sketchStyle: 'high-contrast'
  },
  {
    id: 6,
    frameNumber: 'FRAME 06 / 06',
    title: 'The Kinetic Breakout Whip',
    shotType: 'Whip Pan Transition',
    focalLength: '32mm Prime',
    durationSec: 1.5,
    cameraAngle: 'Level tracking height',
    cameraMove: 'High-speed 120° centrifugal snap right',
    action: 'Courier kicks the metal barrel and dives right. Camera whips with violent blur into black.',
    audioCue: 'Metallic clash boom; bullet ricochet whistle; hard cut to silence.',
    visualDescription: 'Horizontal streaks of neon turquoise and amber smearing across the darkness.',
    sketchStyle: 'dramatic'
  }
];

export const PRODUCTION_PROBLEMS: ProductionProblem[] = [
  {
    title: 'Microphone Boom Reflection in Rain-Slicked Asphalt',
    category: 'Audio',
    issue: 'The wet down-angle street showed the boom operator’s furry zeppelin microphone clearly bouncing in the puddle reflection.',
    impactOnSet: 'Sound recordist had to back out 8 feet, dropping dialogue SNR into noise floor.',
    fieldFix: 'Swapped boom mic for hidden wireless Sanken COS-11D lavaliers taped with moleskin inside the actors’ leather collars. Threw a matte black rubber floor runner just out of camera frame to kill the water mirror.',
    proTip: 'Always spray dulling spray or lay dull rubber mats in wet reflection dead zones.'
  },
  {
    title: 'Lens Fogging Moving Between Sub-Zero Exterior & Heated Interior',
    category: 'Weather',
    issue: 'Taking prime lenses from -8°C snowy exterior to a +22°C steam-heated cabin instantly coated internal glass elements with thick condensation.',
    impactOnSet: '2 hours lost waiting for optics to equalize temperature.',
    fieldFix: 'Stored all cinema glass in airtight Pelican cases with silica gel desiccant packs inside the vestibule airlock for 45 minutes before stepping on heated stage. Used lens warmers powered by V-mount batteries.',
    proTip: 'Never point a hair dryer directly at cold lens elements; rapid thermal shock cracks cemented glass doublets.'
  },
  {
    title: 'Steadicam Horizon Drift on Uneven Rocky Ground',
    category: 'Rigging',
    issue: 'During high-speed tracking runs over gravel, the operator’s mechanical gimbal lost level calibration by 3 degrees on direction changes.',
    impactOnSet: 'Unusable shaky takes with tilted horizons looking like amateur phone footage.',
    fieldFix: 'Mounted an active gyroscopic Horizon stabilizer (ARRI Trinity / Betz Wave) onto the Steadicam post to electronically auto-correct horizon tilt within 0.1 degree.',
    proTip: 'Dynamic balance is not static balance: spin your Steadicam 3 times before every running shot.'
  },
  {
    title: 'Unwanted Practical LED Neon Strobe Banding (Rolling Shutter)',
    category: 'Sensors',
    issue: 'Authentic city street neon and LED billboards flickered with black horizontal bars crawling up the camera sensor.',
    impactOnSet: 'Entire 8K background looked contaminated with cheap electronic scan lines.',
    fieldFix: 'Fine-tuned shutter angle on Alexa LF from standard 180.0° to 172.8° (exact frequency sync for 50Hz European mains power) using clear scan shutter mode.',
    proTip: 'Always test local city lights with the camera viewfinder set to 200% magnification and high contrast before calling roll.'
  },
  {
    title: 'Anamorphic Lens Flare Blowout Veiling Subject Contrast',
    category: 'Optics',
    issue: 'High-intensity car headlights pointing straight into vintage front-anamorphic glass washed out the entire frame into a milky low-contrast fog.',
    impactOnSet: 'Actor’s facial detail collapsed into zero-contrast gray silhouette.',
    fieldFix: 'Added a hard top French flag and side eyebrow wings to the matte box, and switched to modern coated lenses (Master Anamorphic) with controlled streak dispersion.',
    proTip: 'If flares blow out your shadows, drop an anti-reflective polariser and stop down one full T-stop.'
  },
  {
    title: 'Sudden Wind Gusts Buffeting 12x12 Overhead Diffusers',
    category: 'Weather',
    issue: '25-knot gusts in the desert lifted a 12x12 foot silent grid cloth into a giant sail, bending junior C-stands and endangering actors.',
    impactOnSet: 'Imminent safety hazard with crew struggling to hold sandbagged stands.',
    fieldFix: 'Slit the 12x12 cloth with baffled wind vents and anchored corners to 500-pound water drums with ratchet straps; rigged safety tie-offs to production trucks.',
    proTip: 'Never use solid textiles in open desert or clifftops; always order perforated griffolyn or wind-mesh rags.'
  },
  {
    title: 'Drone GPS Signal Loss Near Metallic Water Towers',
    category: 'Rigging',
    issue: 'Aerial chase drone lost GPS satellite lock 40 feet above the roof due to electromagnetic interference from metal HVAC units.',
    impactOnSet: 'Drone began uncontrollable drift toward a concrete antenna.',
    fieldFix: 'Pilot flipped immediately to Attitude (ATTI) manual flight mode; substituted heavy drone with a 30-foot manual Jimmy Jib arm on rooftop tracks for guaranteed safety.',
    proTip: 'Never trust autonomous GPS return-to-home within 50 feet of high-voltage industrial substations.'
  },
  {
    title: 'Actor Eye-Line Disconnect in Reverse Coverage Cross-Shots',
    category: 'Optics',
    issue: 'In a heated dialogue scene shot over two days, the reverse angle actor looked 4 inches too high, making it appear as though the characters were not looking at each other.',
    impactOnSet: 'The edited dialogue felt emotionally detached and artificial.',
    fieldFix: 'Placed an eye-line reference flag (tennis ball on a C-stand) directly beside the matte box rim at the exact millimeter height of the counterpart actor’s pupils.',
    proTip: 'Always measure eye height with a laser measure from the floor, not by eyeball estimation.'
  },
  {
    title: 'Battery Voltage Collapse in Freezing Mountain Night Shoots',
    category: 'Weather',
    issue: 'At -12°C, 150Wh lithium-ion cinema camera batteries died in 11 minutes instead of 90 minutes, rebooting camera mid-take.',
    impactOnSet: 'Continuous data corruption of unfinalized ProRes video files.',
    fieldFix: 'Constructed insulated neoprene thermal jackets with chemical hand-warmers taped to battery backs; routed primary camera power from a heated 2kW Honda generator truck via 100ft heavy copper cable.',
    proTip: 'Store all spare batteries inside heated crew cabins or under production coats until the second before rolling.'
  },
  {
    title: 'Sound Bleed from Heavy Rain Machines Masking Quiet Dialogue',
    category: 'Audio',
    issue: 'Industrial rain towers on set roared at 85 decibels, making intimate dialogue inaudible even with proximity lavaliers.',
    impactOnSet: 'Audio director informed the Director all dialogue would have to be 100% ADR replaced in post.',
    fieldFix: 'Draped wet horsehair pads and acoustic damping quilts over all metal surfaces, cars, and corrugated roofs where rain struck to kill metallic impact ping.',
    proTip: 'Horsehair mats absorb water drop kinetic energy without creating camera-visible splash reflections.'
  },
  {
    title: 'Shadow of Boom Mic Cast Across Actor Face by Moving Key Light',
    category: 'Lighting',
    issue: 'During a 360-degree Steadicam walk, the moving camera operator stepped between the big softbox and the actor, casting a silhouette.',
    impactOnSet: 'Unacceptable black shadow crossing protagonist’s forehead.',
    fieldFix: 'Replaced fixed ground lamps with a lightweight battery-powered LED mat held on a painter’s pole by an electrician walking backwards in sync with the Steadicam.',
    proTip: 'For moving Steadicam master shots, mobile lighting grips are ten times more agile than fixed floor stands.'
  },
  {
    title: 'Focus Puller Latency on Rapid Unrehearsed Actor Lunges',
    category: 'Sensors',
    issue: 'Actor improvised sudden violent lunges toward camera, repeatedly blowing past the sharp focal depth mark.',
    impactOnSet: '11 consecutive ruined takes with actor’s nose in blur.',
    fieldFix: 'Calibrated an ultrasonic LiDAR rangefinder (DJI LiDAR / Arri UDM-1) linked directly to the wireless focus motor, providing real-time distance readouts to the 1st AC’s remote handset.',
    proTip: 'When actors improvise physical movement, tech assists like LiDAR keep the shot in focus without restricting performance.'
  }
];
