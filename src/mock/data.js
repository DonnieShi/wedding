/*global moment*/
const calDiffStr = (oldDate, newDate = Date.now()) => {
  const oldMoment = moment(oldDate);
  const newMoment = moment(newDate);
  const duration = moment.duration(newMoment.diff(oldMoment));
  return Math.floor(duration.as('d')) + 'å¤©';
}


const BOY = 'ð·';
const GIRL = 'ð±';
const DATE_MAP = {
  MEET: new Date('2018-02-08'),
  CONFESSION: new Date('2018-04-06'),
  CONFESSION_YES: new Date('2018-05-18'),
  CONFESSION_YES: new Date('2018-05-18'),
};


export default {
  code: 
`
// å¿å¿
// æç»ä½ è¡¨æ¼ä¸ªåä»£ç 
// ä»£ç åçå¥½ èå©ä¸ç¨æ¾
// ....
// åå æè¦å¼å§åå¦
int year = ${BOY}.birth();
while (year <= ${BOY}.curAge() )
{
    if (${BOY}.findPerson() != ${GIRL}) 
    {
      year ++;
    }
    else
    {
      ${BOY}.say('å«ç»æå§!â¤ï¸');
      ${GIRL}.response('Yes, I doï¼');
      Utils.marry(${BOY}, ${GIRL})
      Utils.generateInvitation(${BOY}, ${GIRL});
    }
}
// å¥½äºæåå®äº
// æè¦å¼å§è¿è¡å¦`,
  executions: [{
    name:'åå§å',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'è§£åä¸­',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'ç»è£ä¸­',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'æåä¸­',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'å¾®ç¬ð',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'å¤§ç¬ð',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'ç¼è¯ä¸­...',
    time: '',
    visible: false
  }],
  barrages: [
    '66666666',
    'çé¼å å·å¥',
    'ä½ çéè¯·å½çæ¯ç¾',
    'é¶é¶æç¾',
    'ä½ æ¯ææ£ç',
    'ååå',
    'ç',
    'éæå¥³è²',
    'ä¸æµé²è±æå¨çç²ªä¸',
    'ä½ åä»£ç èå¿«äº',
    'ä½ çä»£ç çæ¯æ£',
    'ð ð ð ð ',
    'åªè¦ä»£ç åå¾å¥½ï¼åèº«æ°¸è¿è·ä¸äº',
    'ç¥ å¹¸ç¦',
    'ä¸å®èµ¶å°',
    'éå¤å¥½'
  ],
}