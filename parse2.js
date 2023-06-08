//const yaml = require('js-yaml');
const yaml = require('yaml');


async function parseyamlfile(url) 
{   
    const yaml = await fetch(url).then((response) => response.text());
    return yaml;
}

const url = "https://raw.github.hpe.com/aryan-kumar/zap/dummy_branch/security/security.yaml?token=GHSAT0AAAAAAAACIMLZIQTYRQCMV3JXK6LWZEC67OQ";

parseyamlfile(url).then(file => 
{
    file;
    //console.log(file);
    //const readyamlfile = yaml.load(file);
    const readyamlfile = yaml.parse(file);
    console.log(readyamlfile.dastUrl[0].authentication_role);
    console.log(readyamlfile.dastUrl[0].url);
    console.log(readyamlfile.mailList);
    console.log(readyamlfile.dastApi[0].collectionFile);
});


  
  
