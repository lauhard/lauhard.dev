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
        marginRight: "5px",
        size: "2em",
        color: "#a248f7e3"
    }
   
</script>

## Table of Content 
<!-- table of content -->
<AnchorLink slug="{slug}" _enum="1." id="Check if OpenSSH service is running" {anchorProps} />
<AnchorLink slug="{slug}" _enum="2." id="Check if SSH key exists" {anchorProps} />
<AnchorLink slug="{slug}" _enum="3." id="Create a new SSH key" {anchorProps} />
<!-- table of content -->
<br>
<Content>
<!-- named slots -->

<!-- named slots -->
</Content>


