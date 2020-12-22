---
layout: blogLayout
title: 'Setup SSH for GitHub'
category: 'Programming'
author: 'Andreas Lauhard'
creationDate: '2020-12-12'
modificationDate: ''
publish: true
tags: 
    - Productivity
    - Github
---

<script>
    import Content from './content.md'
    import codeSnippets from '../../../components/codeSnippets.js';
    import PrismJS from "../../../components/PrismJS.svelte";
    import Underscore from "../../../components/Underscore.svelte";
    import Capital from "../../../components/Capital.svelte";
</script>


## Table of Content
<!-- table of content -->
<a class ="anchor" href="/blog/setup-ssh-for-github/#check-if-open-ssh-is-running">
    <span class="capital" style="margin-right:6px">
        <Capital char = "1." content = "" size = "2em" color = "#a248f7e3" />
    </span>
    <Underscore content="Check if OpenSSH is running"/>
</a>
<a class ="anchor" href="/blog/setup-ssh-for-github/#check-if-ssh-key-exists">
    <span class="capital" style="margin-right:0px">
        <Capital char = "2." content = "" size = "2em" color = "#a248f7e3" />
    </span>
    <Underscore content="Check if SSH key exists"/>
</a>
<a class ="anchor" href="/blog/setup-ssh-for-github/#create-a-new-ssh-key">
    <span class="capital" style="margin-right:2px">
        <Capital char = "3." content = "" size = "2em" color = "#a248f7e3" />
    </span>
    <Underscore content="Create a new SSH key"/>
</a>
<!-- table of content -->
<br><br>
<Content>
<!-- named slots -->
<span slot="underscore-open-ssh">
    <strong><Underscore content="OpenSSH"/><strong>
</span>
<span slot="underscore-ssh-dir">
    <strong><Underscore content="C:\Users\%username%\.ssh"/><strong>
</span>
<div slot='prism-check-ssh-keys'>
    <PrismJS language="bash" code="{codeSnippets.checkSshKeys}" header=""/>
</div>
<div slot='prism-new-ssh-keys'>
    <PrismJS language="bash" code="{codeSnippets.newSshKey}" header=""/>
</div>
<figure slot='image-services-openssh' class="services-openssh" >

    ![services-openssh](./images/services-openssh-min.png)
    <figcaption>services-openssh</figcaption>
</figure>
<!-- named slots -->

</Content>

<style>
.services-openssh img{
    width:100%;
    object-fit: cover;
}
a {
    text-decoration:none;
    height:25px;
}
.anchor {
    display:flex;
    flex-direction:row;
    align-items:center;
}
.capital {
    margin-top: 12px;
}
figcaption{
    margin-top: -20px;
    padding: 0;
}
</style>