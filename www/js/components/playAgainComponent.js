import template from '../../templates/play-again.tpl.html'
import PlayAgainCtrl from '../controllers/playAgainCtrl'

export let PlayAgainComponent = {
  bindings: {
    pseudo : '<'
  },
  template,
  controller: PlayAgainCtrl
}
