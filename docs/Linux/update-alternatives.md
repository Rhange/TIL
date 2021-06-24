# [Debian] update-alternatives

```bash
man update-alternatives
```

```bash
NAME
       update-alternatives - maintain symbolic links determining default commands

SYNOPSIS
       update-alternatives [option...] command

DESCRIPTION
       update-alternatives  creates,  removes, maintains and displays information about the symbolic links comprising the Debian alternatives system.

......

COMMANDS
       --config name
              Show available alternatives for a link group and allow the user to interactively select which one to use. The link group is updated.
```

`update-alternatives`는 symbolic link를 관리하는 명령어이다.

`--config`를 붙이면 사용할 수 있는 link group을 대화식으로 보여주고 선택할 수 있다.

즉, 여러 버전의 java가 설치되어 있는 환경에서 `java`라는 명령어를 어디에 link를 걸지 선택할 수 있게 해준다.

[출처-SW Level Up](http://programmingskills.net/archives/702)
