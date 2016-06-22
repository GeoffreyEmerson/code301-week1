var articleTemplate = '<article class="projectBox"><h3>{{title}}</h3><h5>{{date}}</h5><h6>({{relativeTimestamp}} ago)</h6><figure><a id="projectUrl" href="{{projectUrl}}" target="_blank"><img id="imageUrl" src="{{imageUrl}}" alt="{{imageAlt}}" class="shadowed"></a><figcaption>{{caption}}</figcaption></figure></article>';

var gitRepoTemplate = '<div class="githubRepo"><a href="{{html_url}}" target="_blank"><h3>{{name}}</h3></a> <p>Description: {{description}}</p> <p>Language: {{language}}</p> <p>Created: {{created_at}}</p> <p>Last updated: {{updated_at}}</p> {{#if watchers_count}} <p>{{watchers_count}} watching this repo</p> {{/if}}</p></div>';
