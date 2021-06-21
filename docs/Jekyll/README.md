# Jekyll이란?

Jekyll이란 개발자들이 애용하는 github에서 개발한 툴로 또다른 사이트 개발 툴인 워드프레스(Wordpress)의 가장 큰 경쟁자로 성장한 듯 하다. 이러한 Jekyll의 핵심 역할은 텍스트 변환 엔진이라고 할 수 있다. 즉, HTML, Markdown 등의 마크업 언어로 글을 작성하면 이것을 미리 정의해 놓은 규칙에 따라 다양한 레이아웃으로 포장하여 정적 웹사이트를 만들어 준다. 

이 과정에서 사용자는 `_config.yml` 이나 `_posts` 폴더 등의 수정 또는 파일 추가를 통해 원하는 기능을 구현할 수 있다.

이때 우리는 Jekyll로 만드는 블로그들이 정적 웹사이트라는 데에 주목해야한다. 정적 웹사이트(Static website)로 웹사이트를 구성하게 되면 PHP 언어를 이용한 서버 소프트웨어가 필요없이 HTML/CSS 등의 정적파일 만으로 사이트를 생성하므로 매우 빠르고 가볍다. Jekyll은 기본적으로 Markdown 언어로 작성한 포스트 글을 github에서 commit & push 하는 방식을 취하고 있기 때문에 github에 익숙하지 않은 사용자라면 다소 진입 장벽이 느껴질수 는 있겠지만, 로컬 저장소에 블로그를 통째로 저장해 놓고 원할때 Markdown만으로 블로그 글 작성이 가능해서 한번 익숙해지면 아주 매력적인 툴이 된다.

[설명 출처](https://nashory.github.io/routine/programming/2017/06/21/2_how_to_use_jekyll.html)

## Jekyll 소스코드를 로컬에서 실행하기

Jekyll로 만든 블로그가 있다는 가정하에 이를 로컬 환경으로 가져와서(`git clone ~`) markdown 파일을 추가하고 변경하여 github에 업데이트 하고자 할 때 설치해주어야 될 것들이 있다.

Jekyll은 Ruby라는 언어를 베이스로 만들어진 라이브러리다. 그러므로 맨 처음 Ruby를 설치해주어야 한다. 본 내용은 Window 환경에서 진행하였다.

## Ruby 설치

[Ruby 다운로드 사이트](https://rubyinstaller.org/downloads/)에 접속해서 굵은 글씨로 되어 있는 버전을 다운받은 후에 설치한다.

설치가 완료되면 프로그램 검색에 'Ruby'라고 치면 'Start Command Prompt with Ruby'라는 명령 프롬프트가 하나 새롭게 생성되어 있을 것이다. 실행하면 1, 2, 3 중에 어떤 것을 설치할 것인지 물어보는데 기본인 1을 입력하고 엔터를 누른다.

## bundler 설치

설치가 완료되면 프롬프트창이 꺼질텐데 다시 실행한 뒤, 아래의 명령어로 'bundler'를 설치한다.

```ruby
gem install bundler
```

ruby에 필요한 패키지들은 `gem install` 명령어로 설치할 수 있지만, 지킬 소스코드를 보면 `Gemfile`이라는 것이 있다. `bundler`를 활용하면 Gemfile에 있는 필요한 패키지들을 한꺼번에 받을 수 있다.

프롬프트에서 현재의 위치를 지킬의 소스코드 root 경로로 설정한 뒤, 아래의 명령어를 실행하여 Gemfile에 있는 패키지들을 다운받는다.

```ruby
bundler update
```

필요한 패키지들을 모두 다운받았으면 이제 지킬을 실행해본다. 실행 커맨드는 아래와 같다.

```ruby
jekyll serve
```

문제없이 실행이 되었다면 아래와 같은 결과가 나온다. 웹 브라우저에서 `localhost:4000`을 입력하면 페이지가 잘 나오는 것을 확인할 수 있다.

```ruby
Configuration file: E:/pentaho-user-group-korea/_config.yml
C:/Ruby27-x64/lib/ruby/gems/2.7.0/gems/pathutil-0.16.2/lib/pathutil.rb:497: warning: Using the last argument as keyword parameters is deprecated
            Source: E:/pentaho-user-group-korea
       Destination: E:/pentaho-user-group-korea/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
        Pagination: Pagination is enabled, but I couldn't find an index.html page to use as the pagination template. Skipping pagination.
                    done in 6.307 seconds.
  Please add the following to your Gemfile to avoid polling for changes:
    gem 'wdm', '>= 0.1.0' if Gem.win_platform?
 Auto-regeneration: enabled for 'E:/pentaho-user-group-korea'
    Server address: http://127.0.0.1:4000
  Server running... press ctrl-c to stop.
```

## tzinfo 에러가 나타난 경우

Windows에서는 Ruby interpreter가 IANA 타임존 정보를 처리하는데 필요한 정보가 없다. 따라서 Gemfile에 아래의 코드가 없을 시에 추가해주도록 한다.
```ruby
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo'
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw]

```

[출처-jennysgap블로그](https://jennysgap.tistory.com/entry/Github-Pages-04-타임존-관리)

## kramdown-parser-gfm Dependency 에러가 나타난 경우

Gemfile에 아래의 코드를 추가해준다.

```ruby
gem "kramdown-parser-gfm"
```

## 설치한 패키지를 전부 삭제 명령어
```ruby
gem uninstall -aIx
```

`a` removes all versions
`I` ignores dependencies
`x` includes executables

[출처-StackOverFlow](https://stackoverflow.com/questions/8095209/uninstall-all-installed-gems-in-osx)