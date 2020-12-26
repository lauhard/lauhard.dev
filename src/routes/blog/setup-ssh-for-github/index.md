---
layout: blogLayout
title: 'Setup SSH for GitHub'
category: 'Programming'
author: 'Andreas Lauhard'
creationDate: '2020-12-12'
modificationDate: ''
publish: true
imageName: 'github-ssh.min.png'
tags: 
    - Productivity
    - Github
---

<script>
    import Slug from '../../../store/slug';
    import Content from './content.md';
    import AnchorLink from "../../../components/AnchorLink.svelte";
    export let slug = "";
    $: slug = $Slug;
    export let anchorProps = {
        marginRight: "0px",
        size: "2em",
        color: "#a248f7e3"
    }
   
</script>

## Table of Content 
<!-- table of content -->
<AnchorLink slug="{slug}" _enum="1." margin="12px 10px 0 0" id="Check if OpenSSH service is running" {anchorProps} />
<AnchorLink slug="{slug}" _enum="2." margin="12px 4px 0 0" id="Check if SSH key exists" {anchorProps} />
<AnchorLink slug="{slug}" _enum="3." margin="12px 6px 0 0" id="Create a new SSH key" {anchorProps} />
<!-- table of content -->
<br>
<Content>
<!-- named slots -->

<!-- named slots -->
</Content>


