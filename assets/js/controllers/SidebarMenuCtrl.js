'use strict';

angular.module('adminLTEApp.Controllers').controller('SidebarMenuCtrl', ['$scope', 'User', function($scope, User) {
  $scope.menus = [
    {
      menu: 'Dashboard',
      icon: 'dashboard',
      children: [
        {
          menu: 'Dashboard v1',
          link: '#'
        },
        {
          menu: 'Dashboard v2',
          link: '#'
        }
      ]
    },
    {
      menu: 'Layout Options',
      icon: 'files-o',
      label: '4',
      label_type: 'primary',
      children: [
        {
          menu: 'Top Navigation',
          link: '#'
        },
        {
          menu: 'Boxed',
          link: '#'
        },
        {
          menu: 'Fixed',
          link: '#'
        },
        {
          menu: 'Collapsed Sidebar',
          link: '#'
        }
      ]
    },
    {
      menu: 'Widgets',
      link: '#',
      icon: 'th',
      label: 'new',
      label_type: 'success'
    },
    {
      menu: 'Charts',
      icon: 'pie-chart',
      children: [
        {
          menu: 'ChartJS',
          link: '#'
        },
        {
          menu: 'Morris',
          link: '#'
        },
        {
          menu: 'Flot',
          link: '#'
        },
        {
          menu: 'Inline Charts',
          link: '#'
        }
      ]
    },
    {
      menu: 'UI Elements',
      icon: 'laptop',
      children: [
        {
          menu: 'General',
          link: '#'
        },
        {
          menu: 'Icons',
          link: '#'
        },
        {
          menu: 'Buttons',
          link: '#'
        },
        {
          menu: 'Sliders',
          link: '#'
        },
        {
          menu: 'Timeline',
          link: '#'
        },
        {
          menu: 'Modal',
          link: '#'
        }
      ]
    },
    {
      menu: 'Forms',
      icon: 'edit',
      children: [
        {
          menu: 'General Elements',
          link: '#'
        },
        {
          menu: 'Advanved Elements',
          link: '#'
        },
        {
          menu: 'Editors',
          link: '#'
        }
      ]
    },
    {
      menu: 'Tables',
      icon: 'table',
      children: [
        {
          menu: 'Simple Tables',
          link: '#'
        },
        {
          menu: 'Data Tables',
          link: '#'
        }
      ]
    },
    {
      menu: 'Calendar',
      link: '#',
      icon: 'calendar',
      label: '3',
      label_type: 'danger'
    },
    {
      menu: 'Mailbox',
      link: '#',
      icon: 'envelope',
      label: '12',
      label_type: 'warning'
    }
  ];
}]);
