---
layout: blogLayout
title: 'Setup SSH for GitHub'
category: 'Programming'
author: 'Andreas Lauhard'
creationDate: '2020-12-12'
modificationDate: ''
publish: true
imageName: 'github-ssh.min.png'
heroOverlayProps: 
    color: "var(--hero-overlay-color)"
    colorOnHover: "var(--hero-overlay-color-hover)"
    backgroundColor: "var(--hero-overlay-background)"
    backgroundColorOnHover: "var(--hero-overlay-background-hover)"
tags: 
    - Productivity
    - Github
---

<script>
    import Slug from '../../../store/slug';
    import { onMount, setContext } from 'svelte';

    import Content from './content.md';
    import AnchorLink from "../../../components/AnchorLink.svelte";
    import Underscore from "../../../components/Underscore.svelte";
    export let href = "";
    $: href = "/blog/" + $Slug;
  
   
</script>

## Table of Content 
<!-- table of content -->
<Underscore>
    <AnchorLink {href} _enum="1." margin="0px 3px 0 0"  id="Check if OpenSSH service is running" slugID = true/>
</Underscore >
<br>
 <Underscore>
    <AnchorLink {href} _enum="2." margin="0px 3px 0 0" id="Check if SSH key exists" slugID = true />
</Underscore>
<br>
 <Underscore>
    <AnchorLink {href} _enum="3." margin="0px 3px 0 0" id="Create a new SSH key" slugID = "true" />
</Underscore >
<br>
 <Underscore>
    <AnchorLink {href} _enum="4." margin="0px 3px 0 0" id="Add the SSH Key to your Github" slugID = "true" />
</Underscore >
<!-- table of content -->

<Content>
<!-- named slots -->

<!-- named slots -->
</Content>
<style>
    .image-container{
        display: flex; flex-direction:row; width:100% ; height:auto; flex-wrap: wrap; justify-content:center; align-items:center;
    }
    .image-margin{
        margin:15px;
    }
    h2 {
        margin: 1em 0 .3em 0;
    }
    
</style>


