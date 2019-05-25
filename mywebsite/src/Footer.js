import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer class="footer">
                <div class="container">
                    <button type="button" class="btn btn-brand btn-facebook">
                        <i class="fa fa-facebook"></i><span>Facebook</span>
                    </button>
                    <button type="button" class="btn btn-ghost-primary">Primary Button</button>
                    <button type="button" class="btn btn-brand btn-twitter">
                        <i class="fa fa-twitter"></i><span>Twitter</span>
                    </button>
                    <button type="button" class="btn btn-brand btn-twitter">
                        <i class="fa fa-twitter"></i>
                    </button>
                </div>
            </footer>

        )
    }
}