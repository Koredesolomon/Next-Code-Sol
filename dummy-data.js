const DUMMY_Questions = [
    {
      id: 'e1',
      userId:'1',
      name:'Korede',
      location:'France',
     question:
        'How do I add a background Image to my web app using NextJs',
      date: '2023-02-2',
      isFeatured: false,
    },
    {
      id: 'e2',
      userId:'2',
      name:'Korede',
     question:
        'Can I use npm create-next-app to create my first NextJs app?',
      date: '2021-05-12',
      isFeatured: false,
    },
    {
      id: 'e3',
      userId:'3',
      name:'Korede',
     question:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      date: '2021-05-12',
      isFeatured: false,
    },
    {
      id: 'e4',
      userId:'3',
      name:'Korede',
     question:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      date: '2021-05-12',
      isFeatured: false,
    },
    {
      id: 'e5',
      userId:'4',
      name:'Korede',
     question:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      date: '2021-05-12',
      isFeatured: false,
    },
    {
      id: 'e6',
      userId:'6',
      name:'Korede',
     question:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      date: '2021-05-12',
      isFeatured: false,
    },
    {
      id: 'e7',
      userId:'5',
      name:'Korede',
     question:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      date: '2021-05-12',
      isFeatured: false,
    },
  ];
  
  export function getAllQuestions() {
    return DUMMY_Questions;
  }

  export function getQuestionsById(id) {
    return DUMMY_Questions.find((event) => event.id === id);
  }

  export function getQuestionsByuserId(userId) {
    return DUMMY_Questions.filter((event) => event.userId === userId);
  }