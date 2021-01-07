---
layout: blogLayout
title: 'Setup SSH for GitHub'
category: 'Programming'
author: 'Andreas Lauhard'
creationDate: '2020-12-12'
modificationDate: '2021-01-07'
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


<Content>
<!-- named slots -->
<!-- table of content -->
<div slot="table-of-content">

## Table of Content  
>**<Underscore><AnchorLink href="{href}" _enum="1." margin="0px 3px 0 0" id="Check if OpenSSH service is running" slugID = true /></Underscore>**  
>**<Underscore><AnchorLink href="{href}" _enum="2." margin="0px 3px 0 0" id="Check if SSH key exists" slugID = true /></Underscore>**  
>**<Underscore><AnchorLink href="{href}" _enum="3." margin="0px 3px 0 0" id="Create a new SSH key" slugID = "true" /></Underscore>**  
>**<Underscore><AnchorLink href="{href}" _enum="4." margin="0px 3px 0 0" id="Add the SSH Key to your Github" slugID = "true" /></Underscore>**  
>**<Underscore><AnchorLink href="{href}" _enum="5." margin="0px 3px 0 0" id="Change URL from HTTPS to SSH" slugID = "true" /></Underscore>** 

</div>
<!-- table of content -->
<!-- named slots -->
</Content>
<style>
    .image-container{
        display: flex; flex-direction:row; width:100% ; height:auto; flex-wrap: wrap; justify-content:center; align-items:center;
    }
    h2 {
        margin: 1em 0 .3em 0;
    }
</style>


