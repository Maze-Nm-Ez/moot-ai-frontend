export const mootCourtRoyalParkScript = [
  {
    id: 1,
    role: 'judge',
    content: 'Court is now in session for the matter of CA 299/2007 – The Attorney General v. Jude Shramantha Jayamaha. Defense Counsel, you may begin.'
  },
  {
    id: 2,
    role: 'user',
    content: '',
    prompt: 'Enter your opening argument as Defense Counsel.'
  },
  {
    id: 3,
    role: 'judge2',
    content: 'But Counsel, the post-mortem report indicated multiple blunt force injuries to the skull. Are you suggesting these were inflicted accidentally?'
  },
  {
    id: 4,
    role: 'user',
    content: '',
    prompt: 'Reply to Judge 2 as Defense Counsel.'
  },
  {
    id: 5,
    role: 'prosecution',
    content: 'My Lords, the injuries were not singular or reflexive. The forensic evidence clearly shows deliberate and repeated blows. The accused then left the scene without alerting anyone, showing full consciousness of guilt.'
  },
  {
    id: 6,
    role: 'appellant',
    content: 'Your Lordships, I did not mean to kill her. We argued, it escalated—I lost control. But I did not plan it. I never wanted her to die.'
  },
  {
    id: 7,
    role: 'judge3',
    content: 'Mr. Jayamaha, the Court is aware of your remorse. But this appeal hinges on legal definitions—intention, premeditation, and proportionality of the act.'
  },
  {
    id: 8,
    role: 'judge',
    content: 'Defense Counsel, how do you explain the fact that the victim was dragged and dropped from a height, after being injured? Would that not suggest further intent?'
  },
  {
    id: 9,
    role: 'user',
    content: '',
    prompt: 'Reply to Judge 1 as Defense Counsel.'
  },
  {
    id: 10,
    role: 'prosecution',
    content: 'With due respect, Your Lordships, the accused had ample time to reflect after the initial blow. Instead of seeking medical assistance or reporting the incident, he chose to conceal it. That speaks volumes about his awareness of the fatality.'
  },
  {
    id: 11,
    role: 'judge2',
    content: 'And the relationship between the victim and the accused? Were there any signs of prior hostility or intent to cause harm?'
  },
  {
    id: 12,
    role: 'user',
    content: '',
    prompt: 'Reply to Judge 2 as Defense Counsel.'
  },
  {
    id: 13,
    role: 'prosecution',
    content: 'Regardless of motive, the legal threshold for murder was met. The act was brutal, intentional, and followed by attempts to evade justice.'
  },
  {
    id: 14,
    role: 'appellant',
    content: 'I have reflected deeply on my actions. I accept responsibility, but I beg the Court to consider the circumstances and reduce the sentence. I was young, confused, and unable to process what had occurred.'
  },
  {
    id: 15,
    role: 'judge',
    content: 'Thank you, Mr. Jayamaha. The Court appreciates the submissions from both parties.'
  },
  {
    id: 16,
    role: 'judge2',
    content: 'The bench shall now adjourn to deliberate on the arguments presented.'
  },
  {
    id: 17,
    role: 'system',
    content: 'Court adjourns briefly.'
  },
  {
    id: 18,
    role: 'judge',
    content: 'The Court has considered the facts, the legal submissions, and the behavior of the accused post-incident. We find that the evidence does establish the necessary intent to sustain a conviction for murder under Section 296 of the Penal Code.'
  },
  {
    id: 19,
    role: 'judge2',
    content: 'However, we recognize the defense\'s argument regarding the accused\'s age, lack of prior offenses, and remorse expressed.'
  },
  {
    id: 20,
    role: 'judge3',
    content: 'Nevertheless, given the brutality of the act and the absence of immediate efforts to mitigate the harm, we uphold the conviction.'
  },
  {
    id: 21,
    role: 'judge',
    content: 'The appeal is dismissed. The original sentence remains.'
  },
  {
    id: 22,
    role: 'system',
    content: 'All rise. Court is adjourned.'
  }
]; 

const ROLE_STYLES = {
  judge: 'bg-purple-50 border-purple-200 text-purple-900',
  judge2: 'bg-indigo-50 border-indigo-200 text-indigo-900',
  judge3: 'bg-green-50 border-green-200 text-green-900',
  // ...other roles
};

const ROLE_PREFIXES = {
  judge: 'Judge 1',
  judge2: 'Judge 2',
  judge3: 'Judge 3',
  // ...other roles
}; 