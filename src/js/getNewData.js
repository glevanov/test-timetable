const airports = [
  {
    name: 'Анадырь (Угольный)',
    code: 'DYR',
  },
  {
    name: 'Братск',
    code: 'BTK',
  },
  {
    name: 'Владивосток (Кневичи)',
    code: 'VVO',
  },
  {
    name: 'Внуково',
    code: 'VKO',
  },
  {
    name: 'Домодедово',
    code: 'DME',
  },
  {
    name: 'Казань',
    code: 'KZN',
  },
  {
    name: 'Кемерово',
    code: 'KEJ',
  },
  {
    name: 'Магнитогорск',
    code: 'MQF',
  },
  {
    name: 'Минеральные Воды',
    code: 'MRV',
  },
  {
    name: 'Нижневартовск',
    code: 'NJC',
  },
  {
    name: 'Волгоград (Гумрак)',
    code: 'VOG',
  },
  {
    name: 'Магнитогорск',
    code: 'MQF',
  },
  {
    name: 'Астрахань (Нариманово)',
    code: 'ASF',
  },
  {
    name: 'Крайний (Байконур)',
    code: 'BXY',
  },
];
const codes = [
  'SU',
  'AZ',
  'KM',
  'NW',
  'UZ',
  'BY',
];
const statuses = [
  'регистрация',
  'задержан',
  'отменён',
  'посадка',
  '',
  '',
  '',
];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const sortByTime = flightData => flightData.sort((a, b) => {
  const aHours = a.time.hours;
  const aMinutes = a.time.minutes;
  const bHours = b.time.hours;
  const bMinutes = b.time.minutes;

  if (aHours < bHours) {
    return -1;
  }
  if (aHours > bHours) {
    return 1;
  }
  return aMinutes - bMinutes;
});

const getNewData = (length = 30) => {
  const data = [];
  for (let i = 0; i < length; i += 1) {
    const entry = {
      destination: airports[getRandomInt(0, airports.length)],
      flight: `${codes[getRandomInt(0, codes.length)]} ${getRandomInt(100, 9999)}`,
      time: {
        minutes: getRandomInt(0, 60),
        hours: getRandomInt(0, 24),
      },
      status: statuses[getRandomInt(0, statuses.length)],
    };
    data.push(entry);
  }
  return sortByTime(data);
};

export default getNewData;
