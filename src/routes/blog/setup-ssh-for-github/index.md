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
    import State from '../../../store/state';
    import { onMount, setContext } from 'svelte';

    import Content from './content.md';
    import AnchorLink from "../../../components/AnchorLink.svelte";
    export let slug = "";
    $: slug = $Slug;
  
   
    // State.x(false, "Navigation");
    console.log($State);
    export let anchorProps = {
        marginRight: "0px",
        size: "2em",
        color: "#a248f7e3"
    }
   
</script>

## Table of Content 
<!-- table of content -->
<AnchorLink slug="{slug}" _enum="1." margin="0px 3px 0 0" id="Check if OpenSSH service is running" {anchorProps} />
<AnchorLink slug="{slug}" _enum="2." margin="0px 3px 0 0" id="Check if SSH key exists" {anchorProps} />
<AnchorLink slug="{slug}" _enum="3." margin="0px 3px 0 0" id="Create a new SSH key" {anchorProps} />
<!-- table of content -->
<br>
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
    
</style>


