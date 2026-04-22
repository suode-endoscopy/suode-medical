const fs = require('fs');

// 产品分类URL列表
const categories = [
  { id: 8, name: '妇科-宫腔镜', url: 'http://www.hzsuode.com/product/8/' },
  { id: 6, name: '内窥镜', url: 'http://www.hzsuode.com/product/6/' },
  { id: 7, name: '普外科-腹腔镜手术器械', url: 'http://www.hzsuode.com/product/7/' },
  { id: 10, name: '泌尿科', url: 'http://www.hzsuode.com/product/10/' },
  { id: 11, name: '五官科', url: 'http://www.hzsuode.com/product/11/' },
  { id: 12, name: '摄像系统', url: 'http://www.hzsuode.com/product/12/' },
  { id: 26, name: '刨削系统', url: 'http://www.hzsuode.com/product/26/' },
  { id: 13, name: '关节镜', url: 'http://www.hzsuode.com/product/13/' },
  { id: 23, name: '一次性使用内窥镜标本取物袋', url: 'http://www.hzsuode.com/product/23/' },
  { id: 22, name: '射频等离子手术电极', url: 'http://www.hzsuode.com/product/22/' },
  { id: 9, name: '胸外科', url: 'http://www.hzsuode.com/product/9/' },
];

console.log('Categories to collect:', JSON.stringify(categories, null, 2));
