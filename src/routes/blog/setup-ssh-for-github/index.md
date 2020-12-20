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
</script>





<Content>

<!-- named slots -->
<div slot='prism1'>
    <PrismJS language="javascript" code="{codeSnippets.blab}" header=""/>
</div>


<figure slot='image-services-openssh' class="services-openssh" >

    ![services-openssh](./services-openssh-min.png)
    <figcaption>services-openssh</figcaption>

</figure>
<!-- named slots -->
</Content>

<style>
.services-openssh img{
    width:100%;
    object-fit: cover;
}
</style>