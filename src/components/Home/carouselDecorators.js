// taken from nuka-carousel

import React from 'react';
import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';

const DefaultDecorators = [
  {
    component: React.createClass({
      render() {
        return (
          <div 
            onClick={this.handleClick}
          >
            <AngleLeft 
              size={80} 
              style={this.getButtonStyles(this.props.currentSlide === 0 && !this.props.wrapAround)} 
            />
        </div>
        )
      },
      handleClick(e) {
        e.preventDefault();
        this.props.previousSlide();
      },
      getButtonStyles(disabled) {
        return {
          border: 0,
          color: 'black',
          outline: 0,
          opacity: disabled ? 0.3 : 1,
          cursor: 'pointer'
        }
      }
    }),
    position: 'CenterLeft'
  },
  {
    component: React.createClass({
      render() {
        let cellOffsetPosition = this.props.slideCount - 1;

        if (this.props.scrollMode === 'remainder') {
          switch (this.props.cellAlign) {
          case 'center':
            cellOffsetPosition =
              this.props.slideCount - Math.ceil(this.props.slidesToShow / 2)
              - (this.props.slidesToShow % 2 === 0 ? 1 : 0);
            break;
          case 'left':
            cellOffsetPosition = this.props.slideCount - this.props.slidesToShow;
            break;
            default:
          }
        }

        return (
          <div 
            onClick={this.handleClick}
          >
            <AngleRight 
              size={80} 
              style={this.getButtonStyles(this.props.currentSlide === cellOffsetPosition && 
                !this.props.wrapAround)}
              />
          </div>
        )
      },
      handleClick(e) {
        e.preventDefault();
        this.props.nextSlide();
      },
      getButtonStyles(disabled) {
        return {
          border: 0,
          color: 'black',
          outline: 0,
          opacity: disabled ? 0.3 : 1,
          cursor: 'pointer'
        }
      }
    }),
    position: 'CenterRight'
  },
 {
    component: React.createClass({
      render() {
        var self = this;
        var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
        return (
          <ul style={self.getListStyles()}>
            {
              indexes.map(function(index) {
                return (
                  <li style={self.getListItemStyles()} key={index}>
                    <button
                      style={self.getButtonStyles(self.props.currentSlide === index)}
                      onClick={self.props.goToSlide.bind(null, index)}>
                      &bull;
                    </button>
                  </li>
                )
              })
            }
          </ul>
        )
      },
      getIndexes(count, inc) {
        const arr = [];

        for (var i = 0; i < count; i += inc) {
          arr.push(i);
        }

        if (arr[arr.length - 1] < count - 1) {
          arr.push(count - 1);
        }

        const log = {};
        return arr.filter((val) => {
          if (log[val] === undefined) {
            log[val] = val;

            return true;
          }
        }).sort();
      },
      getListStyles() {
        return {
          position: 'relative',
          margin: 0,
          top: -10,
          padding: 0
        }
      },
      getListItemStyles() {
        return {
          listStyleType: 'none',
          display: 'inline-block'
        }
      },
      getButtonStyles(active) {
        return {
          border: 0,
          background: 'transparent',
          color: 'black',
          cursor: 'pointer',
          padding: 10,
          outline: 0,
          fontSize: 24,
          opacity: active ? 1 : 0.5
        }
      }
    }),
    position: 'BottomCenter'
  }
];
export default DefaultDecorators;
