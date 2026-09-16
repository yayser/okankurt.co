export type StoryBlock =
  | { type: "text"; value: string }
  | { type: "image"; value: string }
  | { type: "carousel"; value: string[] };

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  modalDesc?: string;
  summary: string;
  coverImage: string;
  coverImageColor?: boolean;
  tags: string[];
  year: string;
  problem: string;
  need: string;
  solution: string;
  images: string[];
  videoUrl: string;
  client: string;
  duration: string;
  stickyVideo?: boolean;
  singleImage?: string;
  hideProblemSolution?: boolean;
  storyContent?: StoryBlock[];
}

export const projects: Project[] = [
  {
    id: "robotic-knee-exoskeleton",
    title: "Robotic Knee Exoskeleton (1DoF)",
    category: "Biomedical Robotics",
    shortDesc: "A single-DoF robotic knee exoskeleton designed to assist individuals with quadriceps weakness, enabling controlled sitting, standing, walking, and stair navigation through a high-torque quasi-direct drive actuation system.",
    summary:
      "A single-DoF robotic knee exoskeleton designed to assist individuals with quadriceps weakness or paralysis, restoring controlled knee extension during everyday movements. The system is built around a quasi-direct drive BLDC servo motor capable of delivering up to 60 Nm peak torque, enabling smooth and responsive actuation for tasks such as sitting, standing, walking, and stair navigation.\n\nThe project was developed as a fully integrated mechatronic system, combining custom mechanical design, embedded electronics, and real-time control. The actuator architecture prioritizes low backlash and high torque density, while the structural components are optimized for strength, weight, and wearability. A custom control interface allows intuitive operation via a handheld remote, ensuring ease of use in real-world scenarios.\n\nBeyond functionality, significant attention was given to build quality and physical detailing. The device was carefully assembled, finished, and refined to achieve a cohesive and robust final artifact—bridging the gap between experimental prototype and product-level execution.\n\nThe result is a compact, wearable assistive device that demonstrates how precise actuation and thoughtful system integration can translate into meaningful mobility support outside of controlled laboratory environments.",
    coverImage:
      "/media/081_ce5f45a84c1c74e7b18749fda50af571.jpeg",
    coverImageColor: true,
    tags: ["Robotics", "Embedded Systems", "Actuation", "IMU"],
    year: "2025",
    problem:
      "Quadriceps paralysis or severe weakness means the knee cannot be actively stabilized during movement. This makes basic actions like standing up, sitting down, walking, or using stairs difficult, unsafe, and physically exhausting. As a result, patients often rely on compensatory movements or external support, leading to reduced mobility and increased risk of falls.",
    need:
      "Patients need a lightweight, wearable, and easy-to-use system that can restore knee stability and support everyday movements without restricting natural motion. The solution should be reliable in real-life conditions and simple enough to operate without complex setup or constant supervision.",
    solution:
      "Developed a single-DoF robotic knee exoskeleton powered by a high-torque quasi-direct drive actuator, enabling controlled assistance for daily movements such as sitting, standing, walking, and stair navigation. The system is designed to be wearable, intuitive to operate via remote control, and focused on real-world usability.",
    images: [
      "/media/076_ca5d0ad0438fb4fedd733df607a48d77.jpeg",
      "/media/064_aef3e16353df80d4291b294077690660.jpeg",
      "/media/043_6886ec38daf041bc67b7263243251bf2.jpeg",
    ],
    videoUrl: "https://www.youtube.com/embed/BJ2jz_6smnY?autoplay=0",
    client: "Personal Project",
    duration: "5 months",
  },
  {
    id: "oring-muscle-response-test-device",
    title: "Automatic O-Ring Muscle Response Test Device Prototype",
    category: "Biomedical Device",
    shortDesc: "A prototype device that quantifies finger grip strength during O-Ring testing, replacing subjective manual evaluation with measurable data.",
    summary:
      "A custom-built O-ring test device developed to objectively measure finger grip strength during sealing operations, replacing subjective manual evaluation with repeatable and quantifiable data. The system is designed to simulate real-world assembly conditions while capturing precise force measurements throughout the insertion process.\n\nAt its core, the device integrates a calibrated force sensing mechanism with a controlled actuation system, allowing consistent test cycles and accurate data acquisition. The hardware is supported by embedded electronics and a custom user interface, enabling operators to run tests, visualize results, and record measurements with minimal training.\n\nThe mechanical design focuses on repeatability and robustness, ensuring that each test is performed under identical conditions. Key parameters such as insertion force, peak load, and force profile over time can be analyzed to evaluate ergonomics, material behavior, and assembly feasibility.\n\nBeyond its functional role as a measurement tool, the device was developed as a cohesive engineering system—combining mechanical design, electronics, and user interaction into a single integrated platform. The result is a reliable and practical testing solution that transforms a traditionally subjective process into a data-driven workflow.",
    coverImage:
      "/media/098_f28d15660848201be77e6f1b86a9bb4e.png",
    coverImageColor: true,
    tags: ["Force Measurement", "Embedded Systems", "Data Acquisition", "Ergonomics"],
    year: "2024",
    problem:
      "Muscle testing methods like the O-ring test are often used to evaluate physical or cognitive responses, but the results are typically subjective and dependent on the person applying the force.\nThis makes it difficult to distinguish between actual response differences and variations caused by inconsistent testing conditions.",
    need:
      "There is a need for a controlled and repeatable way to apply force and measure the response objectively.\nA system that removes human variability would make it possible to observe subtle changes in muscle response under consistent conditions.",
    solution:
      "The O-Ring Test Device standardizes the test by applying controlled force while measuring the user\u2019s response in real time.\nBy eliminating human inconsistency, it allows repeatable experiments and enables exploration of how different inputs may influence muscle response.",
    images: [
      "/media/054_809ec31f13d21451d7029e14a8b05995.jpeg",
      "/media/023_3b820d37bea9c4e71990a9b4e5bb148a.jpeg",
      "/media/037_61ffbd288d246e7280cc6cba14cce0ec.jpeg",
      "/media/017_256608887fe80d28dd107a678a940d6a.jpeg",
      "/media/074_b6706465cd156ec939f871f8d928db21.jpeg",
      "/media/010_168241369fed8e0dced6e9bf4e508a2f.jpeg",
    ],
    videoUrl: "https://www.youtube.com/embed/XjSTpdGJc5o?autoplay=0",
    client: "Mental Movement Academy Cologne / Germany",
    duration: "8 months",
  },
  {
    id: "telescopic-knee-brace",
    title: "Telescopic Knee Brace for RoM Excercise\u00a0\u00a0(Patented)\u00a0",
    category: "Product Design",
    shortDesc: "A biomechanically aligned knee brace with integrated angle tracking, designed to enable safe and measurable rehabilitation exercises.",
    summary:
      "A telescopic knee brace designed to support controlled range-of-motion (RoM) exercises while accurately measuring joint angle during rehabilitation. The device follows the natural kinematics of the knee joint, enabling safe and guided movement without restricting the user\'s motion path.\n\nThe mechanical system is built around a telescopic linkage that adapts to the shifting center of rotation of the knee joint, improving alignment and user comfort compared to conventional fixed-axis braces. An integrated angle measurement mechanism provides real-time feedback, allowing both patients and clinicians to track progress throughout the rehabilitation process.\n\nThe design emphasizes wearability, adjustability, and ease of use. Soft interfaces and strap configurations ensure a secure yet comfortable fit, while the modular structure allows quick adaptation to different leg geometries. The system is intended for repeated daily use in both clinical and home environments.\n\nDeveloped as a patented concept, this project combines biomechanical insight with practical engineering to address a common limitation in rehabilitation devices—accurate motion tracking without compromising natural movement. The result is a functional and user-centered solution that bridges the gap between measurement and mobility support.",
    coverImage:
      "/media/047_753280f980e7a1037f976056f91e4d2b.jpeg",
    coverImageColor: true,
    tags: ["Rehabilitation", "Mechanism Design", "Wearable Device", "Kinematics"],
    year: "2023",
    problem:
      "Conventional knee braces used in rehabilitation often rely on simple hinge mechanisms that can measure angle but fail to accommodate the natural translational movement of the knee joint. This leads to poor alignment, discomfort, and difficulty in maintaining a stable fit during exercises.",
    need:
      "There is a need for a knee brace that can adapt to the natural motion of the joint while still providing a simple and intuitive way to measure joint angle. The system should improve comfort, maintain alignment, and support consistent use during RoM exercises.",
    solution:
      "I developed a telescopic knee brace that allows controlled length variation to better match the natural motion of the knee joint. This approach improves alignment and wearability compared to fixed hinge designs. An integrated colored dial provides a direct and intuitive way to track joint angle, enabling measurable feedback without adding complexity.",
    images: [
      "/media/070_ab6843910745620b7edd211249e1d284.jpeg",
      "/media/063_9e49ad40af603737a8b124db0abfe692.jpeg",
      "/media/088_e4a340dac736a02a328797087f45ef6e.jpeg",
      "/media/096_82660310-3168-4f9c-92cb-041c30b2c2fb_01_1_design-ideas.jpg",
      "/media/088_e4a340dac736a02a328797087f45ef6e.jpeg",
      "/media/102_16038e2c-fed3-4cfb-9dcc-ed8ad0b8aece_04_1st_design_2_edited.jpeg",
      "/media/103_778773d3-52da-4e21-880b-b8c904769f63_05__edited.jpeg",
      "/media/104_4cf2f757-38a6-4b1c-81f7-e311e7a2f5d7_06_edited.jpeg",
      "/media/105_a469ef28-01d8-49a2-a8ac-4e43310c2b67_07__edited.jpeg",
      "/media/106_0e8b7c46-544f-471e-986e-abd15f4cb860_08_1st_design_3_edited.jpeg",
      "/media/107_44243939-20a6-4921-9aa3-63771566221f_09_1st_design_3_edited.jpeg",
      "/media/108_c9db0758-a9da-42e5-8cae-a801016a7dbb_11_2nd-design_2_edited.jpg",
    ],
    videoUrl: "",
    client: "Physipal, Australia",
    duration: "3 months",
  },
  {
    id: "glass-cup-inspection-system",
    title: "Glass Cup Inspection System",
    category: "Machine Vision System",
    shortDesc: "High-speed glass inspection system using telecentric imaging and custom lighting for sub-millimeter defect detection.",
    summary:
      "An automated glass cup inspection system developed to detect surface defects using machine vision, enabling fast and consistent quality control in a production environment. The system is designed to identify imperfections such as cracks, scratches, and contamination that are difficult to assess reliably through manual inspection.\n\nThe solution integrates a controlled lighting setup, high-resolution imaging, and a custom vision pipeline to ensure repeatable and accurate detection. Illumination plays a critical role in revealing subtle surface defects, and the system is engineered to optimize contrast and visibility across different glass conditions.\n\nCaptured images are processed using tailored algorithms that analyze surface features and detect anomalies based on predefined criteria. The system can differentiate between acceptable variations and critical defects, reducing false positives while maintaining high inspection sensitivity.\n\nFrom a mechanical standpoint, the setup is designed for stability and repeatability, ensuring consistent positioning of each glass unit during inspection. The overall system combines hardware, software, and optical considerations into a single integrated solution.\n\nThe result is a reliable and scalable inspection tool that transforms a subjective and error-prone manual process into a precise, data-driven quality control workflow suitable for industrial applications.",
    coverImage:
      "/media/080_c8dfe33a318d302ca6a2266b0f50d433.jpeg",
    coverImageColor: true,
    tags: ["Computer Vision", "Automation", "Optical Inspection", "Quality Control"],
    year: "2013",
    problem:
      "Glass products produced at high speed can contain geometric defects or internal impurities that are difficult to detect with the human eye. Manual inspection is inconsistent and cannot keep up with industrial production rates.",
    need:
      "A reliable system was needed to inspect every single glass item in real time without slowing down the production line. The solution had to provide high precision measurements while also detecting subtle internal defects.",
    solution:
      "A multi-angle machine vision system was developed using telecentric optics and custom-designed lighting to ensure distortion-free and high-contrast imaging. The system enabled accurate defect detection and dimensional inspection at full production speed.",
    images: [
      "/media/080_c8dfe33a318d302ca6a2266b0f50d433.jpeg",
      "/media/082_d5c055ad9461a44f89c98e5e1ee4935c.jpeg",
      "/media/090_df7bb4a26e0dba3c98260d03b61aeee7.jpeg",
      "/media/038_4c1d7cce4113a9c25f5e4ea09ed8407c.jpeg",
      "/media/068_9f6f13863b97c75402e9e813c56a596e.jpeg",
      "/media/009_12112963a6747b51e80d7f6982dcd9de.jpeg",
      "/media/035_640a78c1128b60e796c894ae4424ec21.jpeg",
      "/media/095_ed62ae6ad0ae6110d818845c3a2e87f6.jpeg",
    ],
    videoUrl: "",
    client: "Industrial glass manufacturer",
    duration: "12 months",
  },
  {
    id: "wax-coating-machine",
    title: "Cotton Sheet Wax Coating Machine",
    category: "Industrial Machinery",
    shortDesc: "A controlled wax coating system for cotton sheets where speed and temperature directly define the final product quality.",
    summary:
      "A custom-designed machine developed to apply a controlled wax coating onto cotton-based materials, ensuring uniform surface treatment for improved durability, texture, and functional performance. The system is engineered to deliver consistent coating thickness while maintaining the integrity of the underlying material.\n\nThe process combines precise thermal control, material handling, and mechanical distribution to achieve repeatable results across varying operating conditions. Wax is conditioned to the optimal viscosity before application, allowing smooth transfer onto the cotton surface without oversaturation or uneven buildup.\n\nA dedicated feeding and transport mechanism ensures stable movement of the material through the coating zone, minimizing variation and enabling continuous operation. Key parameters such as temperature, coating pressure, and speed are carefully balanced to maintain process consistency and product quality.\n\nFrom an engineering perspective, the machine is designed as a fully integrated system, combining mechanical design, process control, and practical manufacturability. Emphasis was placed on reliability, ease of operation, and maintainability, making the system suitable for real-world production environments.\n\nThe result is a robust and efficient coating solution that transforms a variable manual process into a controlled, repeatable, and scalable industrial workflow.",
    coverImage:
      "/media/041_668dbe4f3521b74fafae4e5c8a73ad0a.jpeg",
    coverImageColor: true,
    tags: ["Process Engineering", "Automation", "Thermal Control", "Manufacturing"],
    year: "2019",
    problem:
      "Manual wax coating of fabric sheets is highly dependent on operator skill and is sensitive to small variations in temperature and speed. This leads to inconsistent coating quality and low repeatability.",
    need:
      "A system was needed to produce consistent coatings while maintaining the correct balance between temperature and material flow. The process had to be controllable, repeatable, and easy to operate in a real production environment.",
    solution:
      "A machine was developed to control both wax temperature and sheet speed, the two main factors affecting coating quality. By stabilizing these parameters, the process became predictable, repeatable, and independent of manual skill.",
    images: [],
    videoUrl: "https://www.youtube.com/embed/0-wZOvey9D8?modestbranding=1&rel=0",
    client: "Mumo Do\u011fal \u00dcr\u00fcnler Ltd.",
    duration: "6 months",
  },
  {
    id: "mayan-puzzle",
    title: "The Mayan Puzzle\u00a0",
    category: "Product Design",
    shortDesc: "A six-stage electromechanical puzzle disguised as a Mayan artifact — each stage physically locked until the previous one is solved.",
    modalDesc: "The Mayan Puzzle is a fully integrated electromechanical system built to be experienced, not just solved. It\'s a cylindrical artifact with six sequentially locked stages, custom PCBs, embedded audio, and a fictional backstory delivered as a research letter. The electronics and mechanics are inseparable — every physical action triggers an electronic response, and every electronic response reveals the next physical constraint. It took 22 months to build, and it can be reset and solved again from the beginning.",
    summary:
      "The Mayan Puzzle is a multi-layered electromechanical system designed to guide the user through a sequence of constrained interactions. Rather than functioning as a conventional puzzle, it operates as a tightly integrated artifact where mechanical structure, embedded electronics, and narrative are inseparable.\n\nThe system is built as a six-stage cylindrical mechanism, where each section unlocks the next through physically constrained interactions. Progression is strictly sequential—no stage can be bypassed—forcing the user to engage with the object's internal logic. Once completed, the system can be fully reset and solved again, reinforcing its design as a repeatable interactive experience rather than a one-time solution.\n\n At its core, the project combines custom PCB development, compact electronic packaging, and mechanically coupled components within an extremely constrained volume. The electronics—centered around an embedded microcontroller—are tightly integrated into the mechanical flow, requiring aggressive space optimization, vertical stacking strategies, and careful coordination between physical movement and electronic response.\n\nThe interaction is deliberately designed to create tension. When specific mechanisms are triggered, the system responds with unsettling audio—distorted tones, low-frequency hums, and synthesized signals that emerge from within the object. These sounds are not decorative; they are part of the interaction logic, reinforcing the sense that the user is activating something unknown. The experience is intentionally uncomfortable, pushing the object beyond a puzzle into a psychological, immersive system.\n\nOne of the defining aspects of the system is its layered interaction design. Upon solving the primary structure, the object reveals a secondary embedded system—effectively \"a puzzle within the puzzle.\" This final stage shifts the experience from an archaeological artifact to a futuristic device. Once activated through a hidden interaction, the system produces synthesized waveforms and modulation patterns. The user discovers that these signals can be manipulated through spatial orientation, using motion sensing to control frequency and modulation. At a specific orientation, the signal stabilizes into periodic pulses, evoking the behavior of a long-range communication device—suggesting the activation of an interstellar transmitter.\n\nThe project is deeply rooted in narrative design. It is delivered with a multi-page fictional research letter that frames the object as an unearthed artifact discovered in a Mayan temple, potentially linked to extraterrestrial contact. The narrative draws from real historical uncertainties surrounding the sudden collapse of the Mayan civilization, blending them with speculative fiction. This context transforms the interaction into an investigative experience rather than a purely mechanical challenge.\n\nEarly in development, significant effort was dedicated to studying Mayan glyphs and attempting to construct a symbolic language that users would need to interpret in order to solve the system. While generating a fully functional extension of the language proved impractical due to its inherent complexity, authentic Mayan glyphs, creation narratives, and cosmological references were directly embedded into the design. These elements subtly guide the user through symbolism rather than explicit instruction, reinforcing the artifact's narrative authenticity.\n\nThe physical form and surface language were developed using digital sculpting tools, with all exterior components produced via SLA printing. Each part was then hand-finished using airbrush techniques, aging processes, and fine detailing to achieve a diorama-level realism. The goal was to eliminate any perception of a manufactured object and instead present the system as a believable archaeological artifact.\n\nThe interaction begins with a simple, grounded action—powering the object via an internal battery—before gradually revealing increasingly complex layers of behavior. This progression mirrors the narrative arc, transitioning from ancient mystery to advanced technology.\n\nThe Mayan Puzzle is not a standalone device, but a system of interdependent mechanisms combining mechanical engineering, embedded electronics, and storytelling. Designed and built entirely from scratch, it explores how physical constraints, narrative context, and system integration can converge into a single cohesive artifact—where function, form, and experience are inseparable.",
    coverImage:
      "/media/013_1f9834729d9658c07e891c5efa0d3d2e.jpeg",
    coverImageColor: true,
    tags: ["Product Design", "Embedded Systems", "Experience Design", "Storytelling"],
    year: "2021",
    problem: "",
    need: "",
    solution: "",
    images: [
      "/media/042_6c11fbc4f952c32dea0d022345108c5b.jpeg",
      "/media/020_44f256cdb4b92225e3ed122b26f9a642.jpeg",
      "/media/006_029ba1eea18a594a76b083e8382c12ba.jpeg",
      "/media/028_47c91556ea39ceffbd686999269bdef7.jpeg",
      "/media/016_301fbd9913eb6a710c70df2534f8e03b.jpeg",
      "/media/069_b1f570ceceba057bf82c48d9377201e7.jpeg",
      "/media/048_7839530224599a3a4ffece01eab77773.jpeg",
      "/media/051_7de40871578355233b67289f1a820171.jpeg",
      "/media/034_5be337f9c9a50ebbdd1b0ec562955b67.jpeg",
      "/media/045_6f3654a6657208764fa8ef50de0aa8ac.jpeg",
      "/media/093_ffe8553fa378e141737a86ac2c2d9d54.jpeg",
      "/media/046_77f57cba74c642e3b3536869b89407ec.jpeg",
      "/media/033_544cc60c3cef0b48260bd5e62dafa02b.jpeg",
      "/media/092_bd6e8fd0c53b371ef94d90c8bb1e541c.png",
      "/media/007_1920b6df23a6abbbb81e4c2606ef2d65.jpeg",
      "/media/029_4a4010429e8581839d01ab5061094d79.jpeg",
      "/media/018_34e2fbfcaa6cbeb49a133e4f6ce37eb7.jpeg",
      "/media/089_e089f5adada84cd89c37e9ff1e58110e.jpeg",
      "/media/075_c647bb79e0f4b51b578dfea1629bbea0.jpeg",
      "/media/040_66fc7847dda717671ecc4da18e27675c.jpeg",
      "/media/056_98d2d163b5137fc0d9669d7ab490bef0.jpeg",
      "/media/077_c2c336c1ecef95e9a4acbc4a77493baa.jpeg",
      "/media/079_d2ee17dfaa880101ee17e34ba8e6bf60.jpeg",
      "/media/025_40f47f744d3fcd4855f1261a6baacec5.jpeg",
      "/media/022_36db0a94a8b7df9405f27dec37a92d52.jpeg",
      "/media/065_9fdc9b6e5eefe59e152fdec91472e189.jpeg",
      "/media/057_82da539d6139e3b82e4cdefead0e1515.jpeg",
      "/media/078_c4280383e44760c72bf3199e24b313c0.jpeg",
      "/media/011_130d41b35fdfa5a55ed18bf6e0d2a29f.jpeg",
      "/media/053_8435f7ec67c45837c767a2cafa36f90c.jpeg",
      "/media/039_64f2598e73a310a6f75f5678d703f184.jpeg",
      "/media/024_36a4439ae45af2c402561f645fd45ab2.jpeg",
      "/media/012_212d88207b5d115378c9a27d5aa7987a.jpeg",
      "/media/015_244a1ded9ce425dbe30b30906a81c6b2.jpeg",
      "/media/021_428bcf8c669028cd52e869728cc44348.jpeg",
      "/media/036_532b7ef7e581ac7081f2c00fcc3a86e0.jpeg",
      "/media/059_8a78a389573ef2489052d3d54eb00b4c.jpeg",
      "/media/050_77d88fc28d13e3d0443acb1fcd9512df.jpeg",
      "/media/066_a4d6306860772ddff082f54ad1093a14.jpeg",
      "/media/073_bb1799dc83447a8b15389416d3bcfccc.jpeg",
      "/media/071_a04a6ee7836f32f10de23987f0a5d0a6.jpeg",
      "/media/027_357e28ffd0de2302b7b820c99fd9d45d.jpeg",
      "/media/084_d84c9770757be85afdfa58e664b79fca.jpeg",
      "/media/052_7cbbbef4b5a30b7a0f8d3ccaaf4734f6.jpeg",
      "/media/014_1199ee698574a67f0dcdd98d1afc4e46.jpeg",
      "/media/008_08b8c84bdcaed2e686739414970fb56a.jpeg",
    ],
    videoUrl: "https://www.youtube.com/embed/sBINUv742Ys?autoplay=0",
    client: "Personal Project",
    duration: "22 months",
  },
  {
    id: "gram-painting-device",
    title: "Gram Painting Device Prototype",
    category: "Medical Product Design",
    shortDesc: "Automated Gram staining system designed to standardize a manual lab process with high throughput and low chemical usage.",
    summary:
      "This project involved the design and prototyping of an automated Gram staining device for microbiology laboratories. The traditional staining process is performed manually, requiring precise timing and multiple chemical steps, making it both error-prone and difficult to scale.\n\nThe goal was to create a system capable of processing multiple slides in a controlled and repeatable way while reducing chemical consumption and operator dependency.\n\nThe system was built around a rotating carousel capable of holding multiple slides, combined with a fluid delivery system using pumps and atomizing nozzles to apply staining reagents in a controlled manner.\n\nDifferent pump types and nozzle configurations were tested to achieve reliable and uniform coverage while minimizing cross-contamination risk. The device also integrates process sequencing, timing control, and a user interface for flexible operation. Additional concepts such as automated fixation, drying via high-speed rotation, and optional computer vision-based result classification were explored to extend the system beyond basic staining into a more complete laboratory solution.",
    coverImage:
      "/media/005_10a166267130c155d617ba1b28b52fa9.jpeg",
    coverImageColor: false,
    tags: ["Process Automation", "Mechanism Design", "Manufacturing", "Fluid System"],
    year: "2015",
    problem:
      "Manual Gram staining requires precise timing and handling, making it highly dependent on operator skill. This leads to inconsistent results, low throughput, and inefficient use of chemicals in busy laboratories.",
    need:
      "A system was needed to standardize the staining process while handling multiple samples in parallel. It also had to reduce human error and improve efficiency without significantly increasing complexity or cost.",
    solution:
      "An automated device was developed using a rotating slide carousel and controlled fluid delivery system. By managing timing, flow, and sequencing, the process became repeatable, scalable, and less dependent on manual intervention.",
    images: [
      "/media/099_faa2e7d8203487b6c33e1614cb8c755e.png",
      "/media/061_95113120fae26e48b70325eb8e513e9d.png",
    ],
    videoUrl: "https://www.youtube.com/embed/neL44DT-iCc?autoplay=0",
    client: "Private Client",
    duration: "5 months",
  },
  {
    id: "6dof-space-mouse",
    title: "A 6 DoF Space Mouse Experiment",
    category: "Product Design",
    shortDesc: "A custom 6DoF input device that lets you push, pull, twist, and tilt your way through 3D space — all at once, with one hand.",
    modalDesc: "A hands-on experiment in building a 6-axis input device from scratch. The goal was simple: replace the clunky scroll-zoom-orbit workflow of 3D software with something that actually feels spatial. The result is a compact force-sensing controller that reads all six degrees of freedom simultaneously — translation and rotation — and maps them directly to viewport navigation. No buttons, no modes, just push.",
    summary:
      "This project started with a client request on Upwork: a device that would allow intuitive camera control, as if you were physically holding and moving it in space. The requirement was to control all six degrees of freedom simultaneously — three for position and three for orientation — using a single handheld interface.\n\nAs a prototype, I developed a 6DoF space mouse based on a Stewart platform-like mechanism. The system uses six potentiometers to measure motion, and an inverse kinematics model to convert these inputs into 6-axis output. The goal was to create a direct mapping between physical movement and digital control, enabling fluid and natural interaction.\n\nOne of the main challenges was cross-talk between axes — moving the knob in one direction could unintentionally affect others. While this is also present in professional devices, they rely on precise calibration. In this prototype, I addressed the issue with a combination of filtering techniques: small movements were treated as zero to eliminate noise, and a moving average was applied to smooth the output. This ensured that only intentional movements produced meaningful results.\n\nThe result is a functional prototype that demonstrates how multi-axis sensing, kinematic modeling, and signal processing can be combined into a practical human\u2013machine interface.",
    coverImage:
      "/media/060_9b9af5eb48c2a828579dcf2d8634b376.jpeg",
    coverImageColor: false,
    tags: ["Inverse Kinematics", "Embedded", "Calibration"],
    year: "2021",
    problem:
      "Controlling a camera in 3D space using conventional input devices is unintuitive and fragmented. Translation and rotation are typically handled separately, making it difficult to achieve smooth, natural motion \u2014 especially when multiple axes need to be adjusted simultaneously.",
    need:
      "A single input device that allows simultaneous control of all six degrees of freedom, enabling the user to manipulate a camera as if physically holding it. The system should provide continuous, real-time feedback and remain stable and predictable despite multi-axis interaction.",
    solution:
      "A custom 6DoF space mouse prototype based on a Stewart platform-like mechanism. Six potentiometers capture physical motion, which is converted into position and orientation outputs using inverse kinematics.\n\nTo address cross-talk and noise between axes, filtering techniques were applied: small unintended movements are suppressed using a threshold, and a moving average filter ensures smooth, stable output. The result is an intuitive and responsive control system for multi-axis interaction.",
    images: [],
    videoUrl: "https://www.youtube.com/embed/Cv_zyV95_2U?autoplay=0",
    client: "Private Client",
    duration: "2 months",
    stickyVideo: true,
    singleImage: "/media/032_4ad6ba1fb4ed0de74a794d2f37aaafd3.jpeg",
  },
  {
    id: "lantone-speaker",
    title: "The Lantone Speaker",
    category: "Product Design",
    shortDesc: "A Bluetooth speaker built from scratch — enclosure, electronics, and acoustics — as a personal exploration of what it takes to make something that actually sounds good.",
    modalDesc: "A custom Bluetooth speaker designed as an exploration of form, sound, and embedded systems. It combines acoustic considerations, electronics integration, and product aesthetics into a cohesive, hands-on prototype.",
    summary:
      "Lantone started as a simple idea: I really liked the Sony LSPX-S1, and I wanted to build my own version from scratch.\n\nI initially tried to approach it \"properly\" — taking courses, learning how to calculate speaker parameters — but quickly realized that without the right measurement equipment (and access to a wide range of drivers), it wasn't going to be a textbook design. So instead of forcing it, I leaned into a more hands-on approach: using what I had, iterating, listening, and adjusting.\n\nThe cylindrical plexiglass enclosure came from the intuition that it would help guide and contain the sound. After a few iterations (and, to be honest, also considering how to efficiently cut a 2-meter tube), I settled on a proportion that sounded and looked right. The rest of the structure was built using 3D printing, forming a compact body that integrates all components into a single piece.\n\nElectronics-wise, the goal was a fully portable system with long battery life. I built a 3-cell Li-ion pack (11.1V), combined with a charging circuit, BMS, Bluetooth module, and amplifier — all packaged cleanly inside the enclosure. One small detail I particularly liked was using a thin 2mm fiber line to guide the Bluetooth status LED to the front panel — subtle, but it adds a nice touch.\n\nThe base was printed using wood-like filament, then sanded matte and finished with varnish to achieve a more natural feel.\n\nIn the end, it became exactly what I wanted: a functional speaker with its own character — part experiment, part product. A lantern-like object that produces sound… Lantern + Tone — Lantone.",
    coverImage:
      "/media/004_05020a16913b3df91d77b2271175c44a.jpeg",
    coverImageColor: true,
    tags: ["Speaker Design", "Acoustics"],
    year: "2024",
    problem:
      "Post-surgical knee rehabilitation is slow, expensive, and often under-supervised. Patients need consistent, measurable assistance that adapts to their actual recovery state.",
    need:
      "A wearable device that can sense user intent, provide calibrated assistive torque, and log biomechanical data for clinician review.",
    solution:
      "Designed a modular exoskeleton brace with a brushless DC motor, custom harmonic gearbox, strain-gauge torque sensor, and 6-DOF IMU. STM32F4 runs a cascaded PID loop with FSM gait phase detection. BLE module streams data to clinical app.",
    images: [
      "/media/072_b0cd579ed505364be250073b9f71a467.jpeg",
      "/media/085_d8621f67efc2fbba1ea72c98800212ad.jpeg",
      "/media/086_dd7c0c824128d8db30d7293eb553c728.jpeg",
      "/media/058_8e714e8478a2d26e7f56d174e66b42f5.jpeg",
    ],
    videoUrl: "https://www.youtube.com/embed/JY0Dtu2OzWQ?autoplay=0",
    client: "Personal Project",
    duration: "3 months",
    stickyVideo: true,
    hideProblemSolution: true,
  },
  {
    id: "for-the-love-of-duct-tape",
    title: "For the Love of Duct Tape!",
    category: "My Story",
    shortDesc: "Where it all started — with a toy, a light bulb, and curiosity.",
    modalDesc: "A small moment that turned curiosity into a lifelong habit of building.\nTaking things apart, figuring them out, and putting them back together better.",
    summary: "",
    coverImage:
      "/media/049_777b15ff8281e39aa5ee074154e883b5.jpeg",
    coverImageColor: true,
    tags: ["Where is that damn tape?!"],
    year: "80s and 90s\u00a0",
    problem: "",
    need: "",
    solution: "",
    images: [],
    videoUrl: "",
    client: "Me",
    duration: "Life Long",
    storyContent: [
      { type: "text", value: "Have you ever had a moment that changed everything?" },
      { type: "text", value: "Well, I had a few, and fortunately the first one came at the age of 7 when I watched my dad upgrade my toy car. He was a self-taught electrical technician. Actually, not officially, but he knew whatever he needed to know to be an electrical technician, except maths. Because he couldn't get a proper education after primary school, he couldn't pass the technician exams. Yet he could open up any broken TV, find the faulty part, and fix it." },
      { type: "text", value: "So he added a tiny light bulb that lit up as my toy car went forward. I was amazed by it and was soo happy. So he made me another small light bulb attached to a single battery. It was like a tiny magical thing that shines light. I was captivated. I remember taking it and going directly under the table to see in the dark." },
      { type: "text", value: "That simple act sparked a fire in me. It showed me that things don't have to be the way they were — we could change them as we like!" },
      { type: "text", value: "That thought led me to open a few more toys and things at home — some of which led to memorable responses from my mother, i.e., flying slippers and a few groundings \uD83D\uDE0A Nevertheless, I’m grateful to my parents, as they were very supportive of my “experiments.”" },
      { type: "text", value: "The next spark was the first robotic toy they bought me, I suppose. I now understand how much they had to sacrifice to get that toy for me. I played so much with that robot while watching Voltron on TV. I am not sure, but that toy probably left a scratch mark in my subconscious." },
      { type: "text", value: "As I grew up, my curiosity led me to more complex things like DC motors and batteries. I tried to make them spin, light up, or move things. To assemble them, I quickly converged on the most practical engineering solution: duct tape. It deserves a paragraph of its own — but I won’t go into that now; let’s just say you lose the things you use the most :)" },
      { type: "text", value: "One thing led to another, and before I knew it, I was building simple robotic grippers I'd seen in movies. As time passed, I played more and more — I couldn't stop tinkering and creating. I remember building my first 2-DoF robotic arm from basically garbage when I was 10. I used an old pen, a tiny DC motor for the gripper, and a larger DC motor for the main axis from my father's junk. Matchsticks for the gripper. A pencil sharpener for the joint. Oh, I almost forgot — and lots of duct tape too!" },
      { type: "image", value: "/media/101_7bae8d67-7271-4588-9f99-3fa264394ba5_defter_004.jpg" },
      { type: "text", value: "I don't remember how many times I failed while assembling it, but I do remember the frustration. I was so frustrated when nothing worked the way it was supposed to. I mean, you're 10 — things are supposed to work, right? Arghh, that feeling of failure was tearing me apart :) But you try, fail, get over it, and try again. Looking back, I think it was hard for me to deal with failure because of the education system at the time — mistakes weren't really seen as part of the learning process." },
      { type: "text", value: "The result meant everything. When it worked, it was the best moment of my life — I was incredibly proud. Of course, it didn't take long for something to fail again, but at least it worked for a week or so before the duct tape came loose. Then I moved on to other designs: a winch, another robotic arm with one more degree of freedom… and another." },
      { type: "text", value: "As my projects and tinkering evolved I had the need to draw my ideas and get them before my eyes. That forced me to learn how to draw better early in childhood I suppse. I was also frustrated about my drawings at first, but in time they got better and better." },
      { type: "text", value: "When I was in high school, I remember my dad teaching me how a relay works. It was surprising to see such a simple solution to what felt like a tedious problem — I no longer had to manually switch cables to reverse a DC motor. So I kept building. A Cartesian robotic setup with four degrees of freedom. The body was acrylic, thanks to my father (we had a family business in outdoor sign making, so there was always plenty of it), and the gantry rolled over my broken metal toy train tracks — they were incredibly smooth. There it was. For a month, it was fun to play with. Strangely, though, the real joy was always in the building. Seeing it work was nice, but the result never made me as happy. Then it was on to the next project..." },
      { type: "image", value: "/media/100_f6d330bb-ed2d-45e7-a0a8-0c4a0728936c_defter_005.jpg" },
      { type: "text", value: "For as long as I remember I loved diving more than swimming (again my father is to blame:) . Being underwater fascinated me. Probably that feeling evolved into merging with robotics or I don't remember probably I saw ROV's in movies the idea of playing with an RC submarine made perfect sense. I wondered how cool it would be to have a remote-controlled one underwater. I'd then stay underwater as long as I wanted like a scuba diver. So I decided to build one of my own." },
      { type: "text", value: "My plan was simple: build a sealed acrylic box. Use ordinary DC motors with propellers — sure, the salty water would ruin them eventually, but who cares when you have no other choice. Put my old video camera inside with an AUX tether to our 14\" CRT TV. Two 12V, 20A batteries, and that's it. Wait… I can't use duct tape here! 😄" },
      { type: "text", value: "I started drawing again — one design after another. Then I began building a large acrylic box at our workshop. Thanks to our foreman, Uncle Selahattin (as I called him), for helping with the assembly — I was too young to use a chainsaw or any of the tools. We chose 8–10 mm thick acrylic plates for the walls. Cut them to shape, added 45-degree corners to allow more space for the chloroform bond. It took us the whole day, and then it was time to test for leaks with a bucket of water. Moment of truth… and of course, it leaked." },
      { type: "text", value: "We tried adding more chloroform. It leaked again. Apparently, my design was flawed — the sharp corners and edges didn't allow for a proper seal. I had plans to redesign it using acrylic tubes, but I set the project aside. I needed to focus on studying for the university exam. I still tinkered with other things, but I didn't have much time back then. At least I was 100% sure what I wanted to study." },
      { type: "text", value: "Still, I kept thinking about it." },
      { type: "carousel", value: [
        "/media/091_f2211129f386b62138de14ed4cd855e0.jpeg",
        "/media/030_494cbac747671c7983b338af52641c71.jpeg",
        "/media/026_46fec166805cdd4f6d91201bb5cb6ede.jpeg",
        "/media/055_8a40ea29b6c64d07049f4c71e7cb269c.jpeg",
        "/media/062_9f221a3c3cbaa2a38c8a4f610b5d1cd4.jpeg",
        "/media/019_350a1b56473eabb838ec40fe471f7b2a.jpeg"
      ]},
      { type: "text", value: "This was 26 years ago. Everyone says time flies, but it takes on a whole new meaning when you experience it yourself." },
      { type: "text", value: "What's left from all this for me is the joy of designing and building something. The patience and endurance to try again and again when things don't work. The grit. I suppose I'm still the same 8-year-old kid whenever I solder a wire, run a small DC motor, or see a mechanism I designed — whether it works or not, for that matter." },
      { type: "text", value: "Both are mostly welcome..." },
      { type: "carousel", value: [
        "/media/067_ab564bd669cec0a2800f469153a03c8f.jpeg",
        "/media/094_f5803cbfd1f6f32f01ba752fb5592c89.jpeg",
        "/media/044_6cbdf0afa981be0d110307c9ffc00d23.jpeg",
        "/media/031_5b0eded19931a3308108e6edb97145f6.jpeg",
        "/media/087_e02ce051fb6b48dd1988d95d9f3504be.jpeg",
      ]},
    ],
  },
];
