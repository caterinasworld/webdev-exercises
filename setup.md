## Setup for Class

### Installation

1. Install Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

2. Download VS Code as your code editor: https://code.visualstudio.com/
- Live Server
- Prettier
- Git Lens

3. Sign up for the GitHub Student Pack: https://education.github.com/pack

### Setting up the Homework Repo

1. Navigate to your preferred folder and clone the repo.

```console
$ git clone https://github.com/caterinasworld/webdev-exercises webdev-homework
Cloning into 'webdev-homework'...
remote: Enumerating objects: 8, done.
remote: Counting objects: 100% (8/8), done.
remote: Compressing objects: 100% (6/6), done.
remote: Total 8 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (8/8), done.
```
2. Navigate into your newly created `webdev-homework` folder and rename the remote.

```console
$ cd webdev-homework/

$ git remote -v
origin	  https://github.com/caterinasworld/webdev-exercises.git (fetch)
origin	  https://github.com/caterinasworld/webdev-exercises.git (push)

$ git remote rename origin upstream

$ git remote -v
upstream	https://github.com/caterinasworld/webdev-exercises.git (fetch)
upstream	https://github.com/caterinasworld/webdev-exercises.git (push)
```

3. Navigate to your account on GitHub and create a __private repo__.
4. Add collaborator(s).
5. Add the GitHub repo that you created as a remote.

```console
$ git remote add origin https://github.com/student/private-repo-hw.git

$ git remote -v
origin	  https://github.com/student/private-repo-hw.git (fetch)
origin	  https://github.com/student/private-repo-hw.git  (push)
upstream	hhttps://github.com/caterinasworld/webdev-exercises.git (fetch)
upstream	https://github.com/caterinasworld/webdev-exercises.git (push)
```

6. Push the files you cloned into your newly created private remote.

```console
$ git push -u origin master
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 4 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (8/8), 2.67 KiB | 1.33 MiB/s, done.
Total 8 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), done.
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```

7. Once you have specified the upstream, you can push changes to the origin remote.

```console
$ git push
```
