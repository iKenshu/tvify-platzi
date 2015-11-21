

import $ from 'jquery';

var $tvShowsContainer = $('#app-body').find('.tv-shows')

$tvShowsContainer.on('click', 'button.like', function(e) {
		var $this = $(this);
		$this.closest('.tv-show').toggleClass('liked')
	})


export default $tvShowsContainer