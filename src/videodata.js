const videoData = {
  time: 46,
  section: [
    {
      active: true,
      startTime: 0,
      endTime: 10,
      window: {
        video: {
          active: true,
          count: 1
        },
        file: {
          active: true,
          count: 1
        },
        quiz: {
          active: true,
          count: 2
        },
        comments: {
          active: false
        },
        documents: {
          active: false
        },
        practice: {
          active: false
        }
      }
    },
    {
      active: false,
      startTime: 10,
      endTime: 14,
      window: {
        video: {
          active: true,
          count: 1
        },
        file: {
          active: true,
          count: 1
        },
        quiz: {
          active: false
        },
        comments: {
          active: false
        },
        documents: {
          active: false
        },
        practice: {
          active: false
        }
      }
    },
    {
      active: false,
      startTime: 14,
      endTime: 20,
      window: {
        video: {
          active: true,
          count: 1
        },
        file: {
          active: false,
          count: 0
        },
        quiz: {
          active: false
        },
        comments: {
          active: true,
          count: 1
        },
        documents: {
          active: false,
          count: 1
        },
        practice: {
          active: false
        }
      }
    },
    {
      active: false,
      startTime: 20,
      endTime: 30,
      window: {
        video: {
          active: true,
          count: 1
        },
        file: {
          active: false
        },
        quiz: {
          active: false
        },
        comments: {
          active: true,
          count: 1
        },
        documents: {
          active: true,
          count: 1
        },
        practice: {
          active: false
        }
      }
    },
    {
      active: false,
      startTime: 30,
      endTime: 46,
      window: {
        video: {
          active: false
        },
        file: {
          active: false
        },
        quiz: {
          active: false
        },
        comments: {
          active: true,
          count: 1
        },
        documents: {
          active: true,
          count: 1
        },
        practice: {
          active: true,
          count: 1
        }
      }
    }
  ]
};

export default videoData;
