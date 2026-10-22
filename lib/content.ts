// Everything a visitor reads lives here. Edit this file to change the page.

// TODO: real email address, LinkedIn and GitHub URLs
export const links = {
  email: "#",
  linkedin: "#",
  github: "#",
  resume: "/vaibhav-pal-resume.pdf",
};

export type Moment = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  tilt: number;
  // tape: strip of tape on top; tall: crop to 3:4; focus: crop position for tall photos
  tape?: boolean;
  tall?: boolean;
  focus?: string;
};

export const moments: Moment[] = [
  { src: "m1.jpg", width: 720, height: 960, alt: "Crayon drawings pinned on a café wall, including a Shinchan signed by Vaibhav", caption: "yes, I drew Shinchan", tilt: -2.5, tape: true },
  { src: "m14.jpg", width: 720, height: 960, alt: "Vaibhav clutching his head in mock panic in front of a waterfall", caption: "when the deploy fails", tilt: -2.2, tape: true },
  { src: "m2.jpg", width: 311, height: 552, alt: "Vaibhav from behind in a dark gym, back lit by a single light", caption: "back day", tilt: 1.8 },
  { src: "m17.jpg", width: 720, height: 960, alt: "Vaibhav in the gym, posing side-on", caption: "rep by rep", tilt: 2, tape: true },
  { src: "m3.jpg", width: 720, height: 540, alt: "Friends playing badminton on a floodlit court at night", caption: "late-night badminton", tilt: -1.2, tape: true },
  { src: "m13.jpg", width: 720, height: 960, alt: "Vaibhav looking out at a huge misty waterfall", caption: "chasing waterfalls", tilt: 1.6, tall: true, focus: "50% 45%" },
  { src: "m4.jpg", width: 720, height: 960, alt: "A black cat perched on a bed headboard, staring out the window", caption: "the supervisor", tilt: 2.4, tall: true, focus: "50% 30%" },
  { src: "m16.jpg", width: 720, height: 960, alt: "A happy German Shepherd with its tongue out", caption: "certified good dog", tilt: -1.6, tall: true, focus: "50% 40%" },
  { src: "m5.jpg", width: 720, height: 540, alt: "A big group of friends posing together outdoors under the trees", caption: "the crew", tilt: -1.6, tape: true },
  { src: "m15.jpg", width: 720, height: 540, alt: "A big group of friends posing at a waterfall viewpoint", caption: "the crew, again", tilt: 1.2 },
  { src: "m6.jpg", width: 720, height: 960, alt: "Four friends standing ankle-deep on a beach at sunset", caption: "sunsets & good company", tilt: 1.4, tall: true, focus: "50% 75%" },
  { src: "m7.jpg", width: 720, height: 960, alt: "Game night: a Jenga tower balancing bottles and a glass on top", caption: "game night engineering", tilt: -2, tall: true },
  { src: "m18.jpg", width: 720, height: 540, alt: "Friends gathered around a table while someone cuts a cake", caption: "cake o’clock", tilt: -1.4 },
  { src: "m8.jpg", width: 720, height: 406, alt: "Friends standing in a flooded river under a big tree", caption: "river day", tilt: 1.6, tape: true },
  { src: "m9.jpg", width: 720, height: 960, alt: "Hand holding three animal pencils with tiny propellers", caption: "couldn’t resist", tilt: -1.8, tall: true, focus: "50% 25%" },
  { src: "m10.jpg", width: 720, height: 406, alt: "Vaibhav at the edge of a pool at night, about to jump in", caption: "3, 2, 1…", tilt: 2.2 },
  { src: "m11.jpg", width: 360, height: 480, alt: "A bronze panther statue in a palace courtyard", caption: "palace day", tilt: -1.4, tape: true },
  { src: "m12.jpg", width: 323, height: 576, alt: "Friends wrestling an inflatable flamingo in a pool at night", caption: "the flamingo won", tilt: 1.9 },
  { src: "m19.jpg", width: 323, height: 576, alt: "A sleepy black and tan puppy lying on the floor", caption: "tiny chaos", tilt: 1.8 },
];
