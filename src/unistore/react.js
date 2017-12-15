import { Children, Component, createElement } from 'react';

function mapActions(actions, store) {
    if (typeof actions === 'function') 
        { actions = actions(store); }
    var mapped = {};
    for (var i in actions) {
        mapped[i] = store.action(actions[i]);
    }
    return mapped;
}

function select(properties) {
    if (typeof properties === 'string') 
        { properties = properties.split(','); }
    return function (state) {
        var selected = {};
        for (var i = 0;i < properties.length; i++) {
            selected[properties[i]] = state[properties[i]];
        }
        return selected;
    };
}

function assign(obj, props) {
    for (var i in props) 
        { obj[i] = props[i]; }
    return obj;
}

var CONTEXT_TYPES = {
    store: function () {}
};
function connect(mapStateToProps, actions) {
    if (typeof mapStateToProps !== 'function') {
        mapStateToProps = select(mapStateToProps || []);
    }
    return function (Child) {
        class Wrapper extends Component {
            state = mapStateToProps(this.context.store ? this.context.store.getState() : {}, this.props);

            boundActions = actions ? mapActions(actions, this.context.store) : { store: this.context.store };

            componentDidMount() {
                this.context.store.subscribe(this.update);
            };

            componentWillUnmount() {
                this.context.store.unsubscribe(this.update);
            };

            render() {
                return createElement(Child, assign(assign(assign({}, this.boundActions), this.props), this.state));
            }

            update = () => {
                let mapped = mapStateToProps(this.context.store ? this.context.store.getState() : {}, this.props);
                for (let i in mapped) if (mapped[i]!==this. state[i]) {
                    this.state = mapped;
                    return this.setState(null);
                }
                for (let i in this.state) if (!(i in mapped)) {
                    this.state = mapped;
                    return this.setState(null);
                }
            }
        }
        
        Wrapper.contextTypes = CONTEXT_TYPES;
        return Wrapper;
    };
}

var Provider = (function (Component$$1) {
    function Provider () {
        Component$$1.apply(this, arguments);
    }

    if ( Component$$1 ) Provider.__proto__ = Component$$1;
    Provider.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Provider.prototype.constructor = Provider;

    Provider.prototype.getChildContext = function getChildContext () {
        return {
            store: this.props.store
        };
    };
    Provider.prototype.render = function render () {
        return Children.only(this.props.children);
    };

    return Provider;
}(Component));
Provider.childContextTypes = CONTEXT_TYPES;

export { connect, Provider };
//# sourceMappingURL=react.es.js.map
