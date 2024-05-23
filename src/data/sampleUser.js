const SAMPLE_USER_DATA = {
    firstName: 'John',
    lastName: 'Doe',
    headline: 'Software Engineer at XYZ Corp',
    location: {
      city: 'New York',
      country: 'United States',
    },
    industry: 'Information Technology and Services',
    summary:
      'Experienced software engineer with a passion for building scalable web applications. Skilled in JavaScript, Node.js, React, and Python.',
    experience: [
      {
        title: 'Software Engineer',
        company: 'XYZ Corp',
        location: 'New York',
        startDate: '2018-01-01',
        endDate: null,
        description:
          'Developing and maintaining web applications using Node.js and React.',
      },
      {
        title: 'Software Developer Intern',
        company: 'ABC Solutions',
        location: 'San Francisco',
        startDate: '2017-06-01',
        endDate: '2017-12-31',
        description:
          'Assisted in the development of a new mobile application using React Native.',
      },
    ],
    education: [
      {
        degree: 'Bachelor of Science',
        fieldOfStudy: 'Computer Science',
        school: 'University of California, Berkeley',
        startDate: '2014-09-01',
        endDate: '2018-05-31',
      },
    ],
    skills: [
      {
        name: 'JavaScript',
        endorsements: 100,
      },
      {
        name: 'Node.js',
        endorsements: 80,
      },
      {
        name: 'React',
        endorsements: 90,
      },
      {
        name: 'Python',
        endorsements: 70,
      },
    ],
    languages: ['English', 'Spanish'],
    links: [
      {
        type: 'website',
        url: 'https://www.johndoe.com',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/johndoe',
      },
    ],
  };
  
  module.exports = SAMPLE_USER_DATA;
  