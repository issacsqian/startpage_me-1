let config = {
  terminal: {
    title: `Terminal at yuu@yuumoe.com`,
    user: 'i',
    hostname: 'Hamani Yuu',
    welcome: 'Welcome to <d color="#00f501">yuu@yuumoe.com</d> terminal',
    actions: [],
  },
  friends: [
    {
      name: '洞洞圈',
      description: '我的 <d del>技术</d>博客x',
      url: 'https://00o.pw',
    },
    {
      name: '羽萌',
      description: '我的 生活博客',
      url: 'https://yuumoe.com/',
    },
    {
      name: `氢橙社区`,
      description: '科技社区',
      url: 'https://bbs.rmvsm.cn',
    },
    {
      name: '樱花论坛',
      description: '科技论坛',
      url: 'https://sakura-bbs.top/',
    },
	{
      name: '可爱的小和酱',
      description: '风云出我辈，一入江湖岁月催。',
      url: 'https://blog.dmcimi.top/',
    },
  ],
  neofetch: [
    {
      name: 'describe',
      value: '爱幻想的少年',
    },
    {
      name: 'UseOS',
      value: 'Centos Linux x86_64',
    },
    {
      name: 'Blog',
      value: '<d href="https://00o.pw">00o.pw</d>',
    },
    {
      name: 'Github',
      value: '<d href="https://github.com/issacsqian">@issacsqian</d>',
    },
    {
      name: 'email',
      value: '<d href="mailto:yuu@yuumoe.com">yuu@yuumoe.com</d>',
    },
  ],
  ga: {
    enabled: true,
    id: 'G-PVVC00CJ26',
  },
  pwa: {
    enabled: true,
    sw_enabled: true,
  },
};
config.terminal.prefix = `<d color="#00f501">${config.terminal.user}@${config.terminal.hostname}</d><d color="white">:</d><d color="blue">~</d><d color="white">$</d> `;
config.friends = ((a) => {
  let b = '';
  b += `<d color="#ceedf2">My friend</d>\n`;
  for (let i in a) {
    b += `        <d color="#00cdcd">name</d>:<d color="#7f7f7f">${a[i].name}</d>\n`;
    b += `        <d color="#00cdcd">description</d>:<d color="#7f7f7f">${a[i].description}</d>\n`;
    b += `        <d color="#00cdcd">url</d>:<d color="#7f7f7f" href="${a[i].url}">${a[i].url}</d>\n`;
    b += `        ------\n`;
  }
  return b;
})(config.friends);
config.neofetch = (async (a) => {
  let b = '';
  let c = await fetch('./avatar');
  if (c.status === 200) {
    b += await c.text();
  } else {
    throw 'Server Error';
  }
  b += `<d color="#7f7f7f">${config.terminal.user}@${config.terminal.hostname}</d>\n`;
  b += '--------------------------\n';
  for (let i in a) {
    b += `<d color="#7f7f7f"> ${a[i].name}</d>: ${a[i].value}\n`;
  }
  return b;
})(config.neofetch);
config.ga.enabled = ((a) => {
  if (a === 'G-PVVC00CJ26' && window.location.host == '186526.xyz') {
    return true;
  } else if (window.location.host.search('localhost') != -1) {
    return false;
  } else {
    return config.ga.enabled;
  }
})(config.ga.id);
export { config };
