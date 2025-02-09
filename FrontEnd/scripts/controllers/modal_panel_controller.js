// Copyright 2020-2021 Dave Verwer, Sven A. Schmidt, and other contributors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Controller } from '@hotwired/stimulus'

export class ModalPanelController extends Controller {
    static targets = ['button', 'underlay', 'panel']

    connect() {
        // The button that toggles the panel is hidden by default as it only
        // has functionality when JavaScript is enabled, so make it visible.
        this.buttonTarget.classList.add('visible')
    }

    show(event) {
        // Show the panel.
        this.panelTarget.classList.add('visible')

        // Dim the background with an underlay.
        const underlayElement = document.createElement('div')
        this.element.insertBefore(underlayElement, this.panelTarget)
        underlayElement.dataset.modalPanelTarget = 'underlay'
        underlayElement.dataset.action = 'click->modal-panel#hide'

        event.preventDefault()
    }

    hide(event) {
        // Hide the panel and remove the underlay.
        this.panelTarget.classList.remove('visible')
        this.underlayTarget.remove()

        event.preventDefault()
    }
}
