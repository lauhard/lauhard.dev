<Capital char="I" capitalProps='{{size: "2.2em", color: "#a248f7e3", font: "New Times Roman"}}'/> know, I know, Github has a very good documentation but I wanted to give you a quick guide for setting up an SSH connetion to your Github. The SSH protocol is a very powerful protocoll. It is great and secure way to connect to other servers and services. If you work with Github, I would highly recommend you to set it up! You can find some more information about SSH and the links to the Github documentation in the <strong><Underscore><Link {href} id="Resources" slugID = "true" /> 📙</Underscore></strong> section.

<slot name="table-of-content"></slot>

<h2 id="check-if-open-ssh-is-running">1. Check if OpenSSH service is running</h2>

**`OpenSSH`** is disabled by default on Windows10. Open the Windows-Services and search for **`OpenSSH`**. Click right on the service, open settings start the service. For startup type choose "Automatic".

<div class="image-container">

>
<Image imageName="services-openssh-min.png" alt="services-openssh" desc="Windows Service OpenSSH" imageProps ='{{ width:"300px", height: "300px", objectFit: "cover", borderRadius:"10px", position:"center", figureWith:"auto"}}' />

>
<Image imageName="properties-open-ssh.min.png" alt="proprties-openssh" desc="Service OpenSSH Properties" imageProps="{{width:'300px', height:'300px' ,objectFit: 'cover', borderRadius:'10px', position:'center', figureWith:'auto'}}" />

</div>

<h2 id="check-if-ssh-key-exists">2. Check if SSH key exists</h2>

By default, SSH keys will be stored in the directorey: ***`C:\Users\%username%\.ssh`***.
Or open **`Git Bash`** and paste in the following command.
If you haven`t installed it yet, you can download it from **<Underscore><Link href="https://git-scm.com/downloads" id="here" target="_blank" /></Underscore>**.  

<PrismJS language="bash" code="{codeSnippets.git.checkSshKeys}" header=""/>
If you find one of the following files, you can skip step 3.  

<div class="margin-top-left">

✔️ id_rsa.pub  
✔️ id_ecdsa.pub  
✔️ id_ed25519.pub  

</div>

<h2 id="create-a-new-ssh-key">3. Create a new SSH key</h2>

Type in the following command, replace the email address with yours and hit enter.

<PrismJS language="bash" code="{codeSnippets.git.newSshKey}" header=""/>

Choose the default folder and filename for you ssh key. Enter a passphrase and you are done.  

<div class="attention">
❗ It is possible to change the folder and the filename but this requires extra configuration.
</div>

<h2 id="add-the-ssh-key-to-your-github">4. Add the SSH-Key to your Github</h2>

Open the **`id_ed25519.pub`** file and copy the public key into your clipboard.
Open your Github page, click on your profile picture, then click **<Underscore><Link href="https://github.com/settings/profile" id="Settings" target="_blank" /></Underscore>**.  
Click on **`SSH and GPG keys`** in the navigation bar, then click **`New SSH key`**.
Paste in the public key from the clipboard then click **`Add SSH key`**.
>
<Image imageName="ssh-key-min.png" alt="add ssh key on Github" desc="Add SSH-Key on Github" imageProps="{{width:'500px', height:'auto' ,objectFit: 'cover', borderRadius:'10px',position:'center', figureWith:'auto'}}" />

<h2 id="change-url-from-https-to-ssh">5. Change URL from HTTPS to SSH</h2>

Change into your project root directory and paste the following command into your git bash.
The command **`git remote set-url`** allows you to change the URL to your remote repo.

<PrismJS language="bash" code="{codeSnippets.git.setRemoteURLToSSH}" header="Change URL to SSH"/>

You can easily change it back to HTTPS:

<PrismJS language="bash" code="{codeSnippets.git.setRemoteURLToHTTPS}" header="Change URL to HTTPS"/>

Finally, list your remotes to see if it worked:

<PrismJS language="bash" code="{codeSnippets.git.listRemotes}" header=""/>

<h2 id="resources">Resources 📙</h2>

<div class="margin-top-left">

More Information about **<Underscore><Link href="https://searchsecurity.techtarget.com/definition/Secure-Shell" id="SSH" target="_blank" /></Underscore>** from **`searchsecurity.techtarget.com`**  
Official **<Underscore><Link href="https://docs.github.com/en/free-pro-team@latest/github" id="Github Docs" target="_blank" /></Underscore>**  
Download **<Underscore><Link href="https://git-scm.com/downloads" id="GIT" target="_blank" /></Underscore>**  

</div>

<script>
    import Underscore from "../../../components/Underscore.svelte";
    import PrismJS from "../../../components/PrismJS.svelte";
    import codeSnippets from '../../../components/codeSnippets.js';
    import Image from "../../../components/Image.svelte";
    import Link from "../../../components/Link.svelte";
    import Capital from "../../../components/Capital.svelte";
    import Slug from '../../../store/slug';
    export let href = "";
    $: href = "/blog/" + $Slug;
</script>


