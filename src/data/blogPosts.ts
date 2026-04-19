export type BlogCategory = "Workout Routines" | "Fitness Tips" | "Health Advice" | "Nutrition";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  readTime: string;
  date: string;
  image: string;
  /** Full article body — typically three or four paragraphs */
  paragraphs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Ultimate Push-Pull-Legs Split for Maximum Gains",
    excerpt:
      "Break through plateaus with this scientifically-backed training split that optimises muscle recovery and growth for intermediate to advanced lifters.",
    category: "Workout Routines",
    readTime: "7 min",
    date: "Apr 12, 2026",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
    paragraphs: [
      "Push-pull-legs (PPL) organises training by movement pattern rather than body part alone: push days train chest, shoulders, and triceps; pull days hit your back and biceps; leg days cover quads, hamstrings, glutes, and calves. That separation lets each muscle group recover while you train others, so you can accumulate enough weekly volume without beating the same tissues day after day.",
      "For most intermediate lifters, hitting each pattern twice per week works well—for example Monday push, Tuesday pull, Wednesday legs, rest, then repeat. Beginners might start with three sessions per week (one of each); advanced athletes may add a fourth day or use lighter accessory work on extra sessions. Keep compound lifts like bench presses, rows, and squats near the start of the workout when you are freshest.",
      "Progressive overload still matters: add weight, reps, or quality reps over time. Track your lifts and aim for small weekly improvements on your main movements. If recovery stalls, reduce accessory volume before you drop frequency—often the fix is simply less fluff work, not abandoning the split.",
      "Listen to your joints and schedule: if shoulders feel beat up from pressing, swap a flat bench variation for dumbbells or reduce overhead volume temporarily. The best programme is the one you can run consistently for months; PPL stays popular because it balances structure with flexibility.",
    ],
  },
  {
    id: "2",
    title: "5 Warm-Up Mistakes That Are Killing Your Performance",
    excerpt:
      "Most people rush their warm-ups or skip them entirely. Learn the five critical mistakes and how to fix them for safer, stronger workouts.",
    category: "Fitness Tips",
    readTime: "5 min",
    date: "Apr 8, 2026",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80",
    paragraphs: [
      "The first mistake is treating the warm-up as optional. A short, targeted warm-up raises tissue temperature, improves joint fluid viscosity, and primes your nervous system so your working sets feel smoother and safer. You do not need thirty minutes on a treadmill—five to ten focused minutes usually suffice.",
      "Second, static stretching alone before heavy lifting is overrated for performance. Save long holds for after training or separate mobility sessions. Instead, use dynamic movements that mirror your session: leg swings before squats, band pull-aparts before pressing, body-weight squats or push-ups before loading the bar.",
      "Third, jumping straight to your working weight skips practice reps. Ramp-up sets bridge the gap between warm-up movements and top sets; they groove technique under lighter loads and reveal whether anything feels off that day. Fourth, ignoring injury history—skipping ankle or shoulder prep when those areas are problematic—invites flare-ups.",
      "Fifth, copying random celebrity routines instead of matching prep to your workout wastes time. Build a repeatable template: general pulse raiser, mobility for the joints you will stress, activation for weak links, then gradual ramp-up sets on your first main lift. Adjust duration on cold days or when sleep was poor.",
    ],
  },
  {
    id: "3",
    title: "How Sleep Impacts Muscle Recovery (And What to Do About It)",
    excerpt:
      "Discover the science behind sleep and recovery, plus actionable strategies to improve your sleep quality and accelerate gains.",
    category: "Health Advice",
    readTime: "6 min",
    date: "Apr 3, 2026",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&q=80",
    paragraphs: [
      "Sleep is when much of muscle repair and growth signalling occurs. Growth hormone pulses, tissue remodelling, and glycogen replenishment all lean on adequate deep and REM sleep. Cutting sleep repeatedly blunts strength adaptations and increases perceived effort—that five-rep set feels like eight when you are underslept.",
      "Chronic short sleep also disrupts appetite hormones, often increasing cravings for energy-dense foods while reducing impulse control around snacks. That makes fat loss harder and can blunt the clarity you need for consistent training and meal planning.",
      "Protect sleep like any training variable: aim for a regular wake time, dim screens and overhead lights an hour before bed, and keep your bedroom cool and dark. A wind-down ritual—stretching, reading, light mobility—signals your nervous system that it is safe to downshift.",
      "If stress or caffeine keeps you wired, experiment with earlier cut-offs for coffee, brief breathing drills before bed, or journaling to offload racing thoughts. Small consistent sleep gains compound faster than any single supplement.",
    ],
  },
  {
    id: "4",
    title: "Pre-Workout Nutrition: What to Eat and When",
    excerpt:
      "Timing and macros matter. Here's exactly what to eat before training to fuel performance without feeling sluggish.",
    category: "Nutrition",
    readTime: "5 min",
    date: "Mar 28, 2026",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80",
    paragraphs: [
      "Your pre-workout meal should stabilise blood sugar and top off muscle glycogen without sitting heavy in your stomach. For sessions within one to two hours of eating, favour easily digested carbs plus a modest amount of protein—think oatmeal with fruit, rice with chicken, or yoghurt with banana.",
      "Fat and fibre slow gastric emptying; large doses right before lifting can cause discomfort. If you train very early or cannot stomach solid food, a small carb-rich snack or sports drink thirty to sixty minutes out is often enough for moderate workouts.",
      "Hydration matters as much as food. Even mild dehydration raises heart rate and perceived exertion. Sip water leading into the session; if you sweat heavily or train long, consider electrolytes, especially in heat.",
      "Experiment once, log how you felt, then repeat what works. Nutrition is individual: some people thrive on a full meal two hours prior; others prefer a lighter approach. Consistency beats chasing exotic ingredients.",
    ],
  },
  {
    id: "5",
    title: "Building a Home Gym on a Budget: The Essential Guide",
    excerpt:
      "You don't need a commercial gym to get results. Here's how to set up a killer home gym for under $500.",
    category: "Fitness Tips",
    readTime: "8 min",
    date: "Mar 22, 2026",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
    paragraphs: [
      "Start with the movements you cannot replicate without equipment: a sturdy adjustable bench and a pair of adjustable dumbbells or a barbell with weight plates cover pressing, rowing, squatting patterns, and deadlift variations in a small footprint. Flooring mats protect both equipment and neighbours from noise.",
      "Resistance bands add pull-aparts, assisted pull-up work, and joint-friendly isolation without buying five machines. A jump rope or a cheap cardio option like a second-hand bike addresses conditioning if space allows.",
      "Buy quality where safety matters—barbells, collars, and racks—before chasing novelty gadgets. Used commercial-grade gear often outlasts discount department-store sets. Measure ceiling height for overhead pressing and pull-ups before ordering a rack.",
      "Organise storage so setup friction stays low; if putting the bar away takes ten minutes, you will skip sessions. Your home gym succeeds when showing up feels easier than negotiating traffic for a crowded commercial gym.",
    ],
  },
  {
    id: "6",
    title: "The 30-Day Full-Body Transformation Program",
    excerpt:
      "A complete month-long program designed for beginners who want to build strength, lose fat, and establish lasting habits.",
    category: "Workout Routines",
    readTime: "10 min",
    date: "Mar 15, 2026",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=1200&q=80",
    paragraphs: [
      "This month prioritises habit formation over perfection. Three full-body strength sessions weekly give enough stimulus for beginners to learn movement patterns—squat, hinge, push, pull, carry—while leaving days for walking and recovery. Progress is measured by technique, reps, or small weight jumps, not by daily scale drama.",
      "Week one focuses on mastering form with moderate loads and higher rep ranges so tissues adapt without excessive soreness. Weeks two and three gradually add sets or weight on the main lifts while keeping accessory work steady. Week four backs off volume slightly—a deload—to absorb gains and reduce injury risk before deciding your next block.",
      "Nutrition guidance stays simple: eat adequate protein at each meal, include vegetables and whole foods most of the time, and adjust portion sizes based on whether you want recomposition emphasis or fat loss. Hydration and sleep anchor the whole plan.",
      "Expect energy and confidence to climb before visible body changes peak. Track workouts in a notebook or app; consistency over thirty days teaches you what your body responds to, which is worth more than any single four-week transformation photo.",
    ],
  },
  {
    id: "7",
    title: "Managing Stress for Better Body Composition",
    excerpt:
      "Chronic stress spikes cortisol, promoting fat storage and muscle breakdown. Learn evidence-based techniques to keep stress in check.",
    category: "Health Advice",
    readTime: "6 min",
    date: "Mar 10, 2026",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
    paragraphs: [
      "Stress is not only mental: long work hours, poor sleep, under-eating, and overtraining all load the same stress systems. When cortisol stays elevated, appetite can swing, recovery slows, and motivation drops—making body-composition goals harder even when macros look correct on paper.",
      "Training remains a powerful regulator if dosed wisely. Moderate resistance training improves insulin sensitivity and mood; excessive volume without recovery adds stress. Match programme intensity to life load: busy seasons may mean shorter sessions with the same consistency.",
      "Breath work, short walks after meals, and brief mindfulness breaks lower sympathetic drive without requiring a lifestyle overhaul. Even five slow nasal breaths before eating can improve digestion and portion awareness.",
      "Build recovery defaults: a consistent bedtime, social connection, and boundaries around work notifications. Body composition follows sustainable routines more reliably than extreme discipline during calm weeks followed by collapse during stressful ones.",
    ],
  },
  {
    id: "8",
    title: "Post-Workout Meals That Actually Work",
    excerpt:
      "Forget the 'anabolic window' myth. Here's what the research really says about post-workout nutrition and practical meal ideas.",
    category: "Nutrition",
    readTime: "5 min",
    date: "Mar 5, 2026",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=80",
    paragraphs: [
      "The narrow anabolic window was oversold; total daily protein intake matters more than eating within thirty minutes of your last set. Still, a post-workout meal can aid recovery, especially if you train fasted or have another session coming soon.",
      "Aim for twenty to forty grams of complete protein—animal sources or thoughtful plant combinations—plus carbs proportional to training duration and intensity. After hard leg days or long conditioning, include more starch to refill glycogen; after short upper-body work, a smaller carb serving may suffice.",
      "Practical options include Greek yoghurt with fruit, a turkey sandwich, rice bowls with salmon or tofu, or a smoothie with protein powder and oats. Keep fat moderate immediately post-workout if digestion is sensitive, but you do not need zero fat forever.",
      "Hydrate and electrolyte replace if you sweated heavily. Ultimately, choose meals you enjoy and can repeat; the best post-workout nutrition is the one that keeps you consistent with your overall daily targets.",
    ],
  },
];

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find((p) => p.id === id);
}
