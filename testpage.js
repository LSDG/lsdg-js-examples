var scriptTagContents = $('script').last().text();

$(function()
{
    var filesToLoad = JSON.parse(scriptTagContents);
    console.log("Loading script files: ", filesToLoad);

    var section = console.group || console.log;
    var endSection = console.groupEnd || function(){};

    var scriptDisplayTemplate = $('#scriptDisplayTemplate');

    function runScript(runButton, filename, body)
    {
        runButton.button('running');
        section(filename);

        eval('(function(){' + body + '\n})();');

        endSection();
        runButton.button('idle');
    }

    function addScriptToPage(filename, body)
    {
        var scriptDisplayElem = scriptDisplayTemplate.clone();
        scriptDisplayElem.attr('id', filename.replace('.', '_'));

        // Set the accordion title.
        var titleLink = scriptDisplayElem.find('div.accordion-heading a.accordion-toggle');
        titleLink.text(filename);

        /*
        // Set up collapse toggling.
        var collapsedElem = scriptDisplayElem.find('div.accordion-body.collapse');
        collapsedElem.collapse();

        // On click, toggle the accordion:
        titleLink.click(collapsedElem.collapse.bind(collapsedElem, 'toggle'));
        */

        // Add the new script widget to the page.
        scriptDisplayElem.appendTo('article');

        // Populate the script display tag.
        var scriptEdit = scriptDisplayElem.find('div.accordion-inner');
        var codeMirror = CodeMirror(scriptEdit[0], {
            mode: "application/json",
            value: body
        });

        var runButton = scriptDisplayElem.find('div.accordion-heading button');
        runButton.click(function onRunClicked(runButton, filename, codeMirror)
        {
            runScript(runButton, filename, codeMirror.getValue());
        }.bind(this, runButton, filename, codeMirror));
    }

    function scriptLoaded(filename, body)
    {
        console.log('Script "' + filename + '" loaded; adding to page.');
        addScriptToPage(filename, body);

        // Load next script.
        loadNext();
    }

    function onScriptLoadError(filename, jqXHR, textStatus, errorThrown)
    {
        console.log('onScriptLoadError', filename, jqXHR, textStatus, errorThrown);
        var errorElem = $('<div class="alert"><strong></strong><span></span></div>');
        errorElem.find('strong').text('Error while loading script "' + filename + '":');
        errorElem.find('span').text(errorThrown);
        errorElem.appendTo('article');

        // Load next script.
        loadNext();
    }

    function loadNext()
    {
        // Get and remove the first filename from the list.
        var filename = filesToLoad.shift();
        if(!filename)
        {
            console.log("Finished loading.");
            setTimeout(console.clear, 100);
            return;
        }

        var url = filename;
        if(url.indexOf('://') == -1)
        {
            var loc = window.location + '';
            url = loc.slice(0, loc.lastIndexOf('/') + 1) + url;
        }

        // Start loading this script.
        console.log("Loading script: ", filename);
        $.ajax({
            url: url,
            success: scriptLoaded.bind(this, filename),
            dataType: 'text',
            isLocal: true,
            error: onScriptLoadError.bind(this, filename)
        });
    }

    // Start loading the JS files.
    loadNext();
});
