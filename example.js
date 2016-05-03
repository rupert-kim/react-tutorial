

var RupertCalc = React.createClass({
    getDefaultProps:function(){
        return{
            nameList :[
                {name:"tony stark",age:30},{name:"haword stark",age:60}, {name:"torr",age:320}, {name:"hulk",age:36}]
        }
    },
    getInitialState: function() {
        return {
            price:50000
        };
    },
    handleInputChange: function(event) {
        this.setState({
            price:event.target.value
        });
    },

    render: function() {
        var priceDivCount = this.state.price / this.props.nameList.length;
        var nameList = this.props.nameList;

        return (

            <div>
                <strong>
                    식사자 명단
                </strong>
                <NameForm nameList={nameList}/>
                <div class="col-md-12">
                    <strong >총 식비 : {this.state.price}</strong>
                    <br/>
                    <strong>일인당 식비: {priceDivCount}</strong>
                </div>
                <p class="col-md-12">
                    <label>
                        총 식사금액: <input type="number" value={this.state.price} onChange={this.handleInputChange} />
                    </label>
                    <br/>
                </p>
            </div>
        );
    }
});
var NameForm = React.createClass({
    render: function () {
        var nameList = this.props.nameList;
        console.log('wha');
        return (
            <div class="row col-md-12">
                {
                nameList.map(function (manData) {
                    return (
                        <div className="col-md-4">
                            <span className="bg-red">
                                이름 : {manData.name}&nbsp;
                            </span>
                            <span className="bg-blue">
                                나이 : {manData.age}
                            </span>
                        </div>
                    )
                })
                }
            </div>
        );

    }
});



ReactDOM.render(
  <RupertCalc />,
  document.getElementById('container')
);
