/*global moment*/
const calDiffStr = (oldDate, newDate = Date.now()) => {
  const oldMoment = moment(oldDate);
  const newMoment = moment(newDate);
  const duration = moment.duration(newMoment.diff(oldMoment));
  return Math.floor(duration.as('d')) + '天';
}


const BOY = '🐷';
const GIRL = '🐱';
const DATE_MAP = {
  MEET: new Date('2018-02-08'),
  CONFESSION: new Date('2018-04-06'),
  CONFESSION_YES: new Date('2018-05-18'),
  CONFESSION_YES: new Date('2018-05-18'),
};


export default {
  code: 
`
// 嘿嘿
// 我给你表演个写代码
// 写之前忍不住 吟诗一首
// 尘世是非 躲不开人间风月 人间风月 躲不开情深意长
// ....
// 哈哈 我要开始写啦
int year = ${BOY}.birth();
while (year <= ${BOY}.curAge() )
{
    if (${BOY}.findPerson() != ${GIRL}) 
    {
      year ++;
    }
    else
    {
      ${BOY}.say('嫁给我吧!❤️');
      ${GIRL}.response('Yes, I do！');
      Utils.marry(${BOY}, ${GIRL})
      Utils.generateInvitation(${BOY}, ${GIRL});
    }
}
// 好了我写完了
// 我要开始运行啦`,
  executions: [{
    name:'初始化',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'解压中',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'组装中',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'打包中',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'微笑🙂',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'大笑😄',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'编译中...',
    time: '',
    visible: false
  }],
  barrages: [
    '66666666',
    '牛逼啊 川哥',
    '你的邀请函真是美',
    '陶陶最美',
    '你是最棒的',
    '哇哇哇',
    '牛',
    '郎才女貌',
    '一朵鲜花插在牛粪上',
    '你写代码老快了',
    '你的代码真是棒',
    '😗 😙 😚 😋 ',
    '只要代码写得好，单身永远跑不了',
    '祝 幸福',
    '一定赶到',
    '酒备好'
  ],
}