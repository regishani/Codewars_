//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 
//For example:

//domainName("http://github.com/carbonfive/raygun") == "github" 
//domainName("http://www.zombie-bites.com") == "zombie-bites"
//domainName("https://www.cnet.com") == "cnet 

function domainName (url){
    url = url.replace(/^https?:\/\//, "") //we want to remove protocols the http or https
    url = url.replace(/^www\./, "") // we want to remove www 
    
    return url.split("."). url[0] //split the URL into parts on the . character. The first part is the domain name, so we return that
}