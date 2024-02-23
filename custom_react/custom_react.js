function customrender(reactelement,container)
{
    // const domelement=document.createElement(reactelement.type)
    // domelement.innerHTML=reactelement.children
    // domelement.setAttribute('href',reactelement.props.href)
    // domelement.setAttribute('target',reactelement.props.target)
    // container.appendChild(domelement);

    const domelement=document.createElement(reactelement.type)
    domelement.innerHTML=reactelement.children
    for (const props in reactelement.props ) {
      if (props === 'children') continue
        else domelement.setAttribute(props,reactelement.props[props])
    
}
container.appendChild(domelement)
}


const reactelement=
{
    type:'a',
    props:
    {
        href:"https://google.com",
        target:"_blank",

    },
    children:"click me for results"
}

const container=document.querySelector('.root');

 customrender(reactelement,container)