---
path: /blog/setup-ssh-for-github/
---

<!-- ### 1. [Check if OpenSSH service is running]({path}#check-if-open-ssh-is-running) -->
<h2 id="check-if-open-ssh-is-running">Check if OpenSSH service is running</h2>
On Windows 10 is the Service <strong><Underscore content="OpenSSH"/></strong> disabled by default. Right click the service, open settings and enable the service. Now you can start the service.

<slot name='image-services-openssh'></slot>

<h2 id="check-if-ssh-key-exists">Check if SSH key exists</h2>
By default, SSH keys will be stored in the directorey: <strong><Underscore content="C:\Users\%username%\.ssh"/></strong> .
Alternativly, you can check it, with this command.

<slot name='code-check-ssh-keys'></slot>

You should find one of these files:

- id_rsa.pub
- id_ecdsa.pub
- id_ed25519.pub

<h2 id="create-a-new-ssh-key">Create a new SSH key</h2>
<slot name='code-new-ssh-keys'></slot>


<script>
    import Underscore from "../../../components/Underscore.svelte";
</script>

 