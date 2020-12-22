---
path: /blog/setup-ssh-for-github/
---

<!-- ### 1. [Check if OpenSSH service is running]({path}#check-if-open-ssh-is-running) -->
  
<h2 id="check-if-open-ssh-is-running">Check if OpenSSH service is running</h2>
On Windows 10 is the Service <slot name='underscore-open-ssh'></slot> disabled by default. Right click the service, open settings and enable the service. Now you can start the service.

<slot name='image-services-openssh'></slot>

<h2 id="check-if-ssh-key-exists">Check if SSH key exists</h2>
By default, SSH keys will be stored in the directorey: <slot name='underscore-ssh-dir'></slot>.
Alternativly, you can check it, with this command.

<slot name='prism-check-ssh-keys'></slot>

You should find one of these files:

- id_rsa.pub
- id_ecdsa.pub
- id_ed25519.pub

<h2 id="create-a-new-ssh-key">Create a new SSH key</h2>
<slot name='prism-new-ssh-keys'></slot>

 