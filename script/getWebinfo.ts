try{
    console.log("Getting cdn servers")
    let req = await fetch("https://raw.githubusercontent.com/yanxiu0614/subdomain3/master/dict/cdn_servers.txt")
    let res = await req.text()
    Deno.writeTextFile("./Web/cdn_servers.txt", res)
} catch(err){}

try{
    console.log("Getting name servers ip")
    let req = await fetch("https://raw.githubusercontent.com/yanxiu0614/subdomain3/master/dict/name_servers.txt")
    let res = await req.text()
    Deno.writeTextFile("./Web/name_servers.txt", res)
} catch(err){}


//get all the sub
let sub = []
try{
    console.log("Getting subdomains from yanxiu0614/subdomain3")
    let req = await fetch("https://raw.githubusercontent.com/yanxiu0614/subdomain3/master/dict/sub_full.txt")
    let res = await req.text()
    sub = sub.concat(res.split("\n"))
} catch(err){}

try{
    console.log("Getting subdomains from guelfoweb/knock")
    let req = await fetch("https://raw.githubusercontent.com/guelfoweb/knock/master/knockpy/wordlist.txt")
    let res = await req.text()
    let tmp = res.split("\n")
    for(let i=0;i<tmp.length;i++){
        if(!sub.includes(tmp[i])){
            sub.push(tmp[i])
        }
    }
} catch(err){}

try{
    console.log("Getting subdomains from laramies/theHarvester")
    let req = await fetch("https://raw.githubusercontent.com/laramies/theHarvester/master/wordlists/dns-big.txt")
    let res = await req.text()
    let tmp = res.split("\n")
    for(let i=0;i<tmp.length;i++){
        if(!sub.includes(tmp[i])){
            sub.push(tmp[i])
        }
    }
} catch(err){}


Deno.writeTextFileSync("./Web/sub_full.json", JSON.stringify(sub))
Deno.writeTextFileSync("./Web/sub_full.txt", sub.join("\n"))